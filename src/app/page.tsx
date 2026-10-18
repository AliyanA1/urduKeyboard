"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ModeTabs } from "@/components/ModeTabs";
import { LessonSidebar } from "@/components/LessonSidebar";
import { PracticePanel } from "@/components/PracticePanel";
import { VirtualKeyboard } from "@/components/VirtualKeyboard";
import { WritingPanel } from "@/components/WritingPanel";
import { standardUrduKeyboard, type KeyboardKey } from "@/lib/keyboard";
import { getLessonContent, lessons } from "@/lib/practice";
import { accuracy, compareTyping } from "@/lib/typing";

type Mode = "practice" | "write";
type Theme = "light" | "dark";

export default function Home() {
  const [mode, setMode] = useState<Mode>("practice");
  const [theme, setTheme] = useState<Theme>("light");
  const [lessonNumber, setLessonNumber] = useState(1);
  const [wordIndex, setWordIndex] = useState(0);
  const [content, setContent] = useState(() => getLessonContent(1, 1));
  const [text, setText] = useState("");
  const [selectedKey, setSelectedKey] = useState("KeyA");
  const [errorKey, setErrorKey] = useState<string>();
  const [duration, setDuration] = useState<number>(60);
  const [seconds, setSeconds] = useState(60);
  const [running, setRunning] = useState(false);
  const [wordsDone, setWordsDone] = useState(0);
  const [finished, setFinished] = useState(false);
  const [shiftActive, setShiftActive] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const sessionSeedRef = useRef(1);
  const practiceInputRef = useRef<HTMLInputElement>(null);
  const writingInputRef = useRef<HTMLTextAreaElement>(null);
  const errorTimerRef = useRef<number | undefined>(undefined);
  const lesson = lessons[lessonNumber - 1];
  const maxUnlocked = Math.min(lessons.length, Math.max(1, ...completedLessons, 0) + 1);
  const target = content[wordIndex % content.length];
  const nextCharacter = Array.from(target)[Array.from(text).length];
  const nextKey = standardUrduKeyboard.find((key) => key.output === nextCharacter || key.shifted === nextCharacter);
  const targetNeedsShift = Boolean(nextKey && nextKey.shifted === nextCharacter && nextKey.output !== nextCharacter);
  const states = useMemo(() => compareTyping(target, text), [target, text]);
  const score = accuracy(target, text);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("urdu-master-theme");
    if (savedTheme === "dark" || savedTheme === "light") setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("urdu-master-theme", theme);
  }, [theme]);

  useEffect(() => {
    const saved = window.localStorage.getItem("urdu-master-completed-lessons");
    if (saved) {
      try {
        setCompletedLessons(JSON.parse(saved));
      } catch {
        window.localStorage.removeItem("urdu-master-completed-lessons");
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("urdu-master-completed-lessons", JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    setContent(getLessonContent(lessonNumber, sessionSeedRef.current));
    setWordIndex(0);
    setText("");
    setRunning(false);
    setFinished(false);
  }, [lessonNumber]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = standardUrduKeyboard.find((item) => item.code === event.code);
      if (key) setSelectedKey(key.code);
      if (event.key === "Shift") setShiftActive(true);
    };
    window.addEventListener("keydown", handleKeyDown);
    const handleKeyUp = (event: KeyboardEvent) => { if (event.key === "Shift") setShiftActive(false); };
    window.addEventListener("keyup", handleKeyUp);
    return () => { window.removeEventListener("keydown", handleKeyDown); window.removeEventListener("keyup", handleKeyUp); };
  }, []);

  useEffect(() => {
    if (!running || mode !== "practice") return;
    const timer = window.setInterval(() => setSeconds((value) => {
      if (value <= 1) {
        setRunning(false);
        setFinished(true);
        window.localStorage.setItem("urdu-master-last-session", JSON.stringify({ words: wordsDone, accuracy: score }));
        return 0;
      }
      return value - 1;
    }), 1000);
    return () => window.clearInterval(timer);
  }, [running, mode, wordsDone, score]);

  function focusActiveInput() {
    if (mode === "practice") practiceInputRef.current?.focus();
    else writingInputRef.current?.focus();
  }

  function insertText(value: string) {
    const input = mode === "practice" ? practiceInputRef.current : writingInputRef.current;
    const start = input?.selectionStart ?? text.length;
    const end = input?.selectionEnd ?? text.length;
    const nextText = `${text.slice(0, start)}${value}${text.slice(end)}`;
    setText(nextText);
    if (mode === "practice" && !running && seconds > 0) setRunning(true);
    if (mode === "practice" && nextText === target) window.setTimeout(() => nextWord(true), 120);
    window.requestAnimationFrame(() => {
      input?.focus();
      const cursor = start + value.length;
      input?.setSelectionRange(cursor, cursor);
    });
  }

  function clickKey(key: KeyboardKey) {
    const output = shiftActive ? (key.shifted ?? key.output) : key.output;
    if (mode === "practice" && nextCharacter !== undefined && output !== nextCharacter && !(nextCharacter === " " && key.width === "space")) {
      setErrorKey(key.code);
      window.clearTimeout(errorTimerRef.current);
      errorTimerRef.current = window.setTimeout(() => setErrorKey(undefined), 1500);
      return;
    }
    setSelectedKey(key.code);
    setErrorKey(undefined);
    if (key.output !== undefined) insertText(output!);
    else if (key.width === "space") insertText(" ");
  }

  function handlePhysicalKey(event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const key = standardUrduKeyboard.find((item) => item.code === event.code);
    if (!key) return;
    setSelectedKey(key.code);
    if (event.ctrlKey || event.altKey || event.metaKey) return;
    const alreadyUrdu = /[\u0600-\u06ff\u0750-\u077f]/u.test(event.key);
    if (alreadyUrdu) return;
    const output = event.shiftKey || shiftActive ? key.shifted : key.output;
    if (output === undefined && key.width !== "space") return;
    event.preventDefault();
    insertText(output ?? " ");
  }

  function changeMode(nextMode: Mode) {
    setMode(nextMode);
    setText("");
    setRunning(false);
    setFinished(false);
    window.requestAnimationFrame(focusActiveInput);
  }

  function selectLesson(nextLesson: number) {
    if (nextLesson < 1 || nextLesson > maxUnlocked || nextLesson === lessonNumber) return;
    setLessonNumber(nextLesson);
    window.requestAnimationFrame(focusActiveInput);
  }

  function completeLesson() {
    setCompletedLessons((value) => value.includes(lessonNumber) ? value : [...value, lessonNumber].sort((a, b) => a - b));
  }

  function nextWord(completed = text === target) {
    if (completed && wordIndex + 1 >= content.length) {
      completeLesson();
      if (lessonNumber < lessons.length) {
        setLessonNumber(lessonNumber + 1);
        return;
      }
    }
    setWordIndex((value) => {
      if (value + 1 < content.length) return value + 1;
      sessionSeedRef.current += 1;
      setContent(getLessonContent(lessonNumber, sessionSeedRef.current));
      return 0;
    });
    setText("");
    setWordsDone((value) => value + (completed ? 1 : 0));
    window.requestAnimationFrame(focusActiveInput);
  }

  function resetPractice() {
    setText("");
    setSeconds(duration);
    setWordsDone(0);
    setRunning(false);
    setFinished(false);
    sessionSeedRef.current += 1;
    setContent(getLessonContent(lessonNumber, sessionSeedRef.current));
    setWordIndex(0);
    window.requestAnimationFrame(focusActiveInput);
  }

  function changeDuration(value: number) {
    setDuration(value);
    setSeconds(value);
    setFinished(false);
  }

  function startSession() {
    sessionSeedRef.current += 1;
    setContent(getLessonContent(lessonNumber, sessionSeedRef.current));
    setWordIndex(0);
    setText("");
    setWordsDone(0);
    setSeconds(duration);
    setFinished(false);
    setRunning(true);
    window.requestAnimationFrame(focusActiveInput);
  }

  function updatePracticeText(value: string) {
    setText(value);
    if (!running && seconds > 0) setRunning(true);
    if (value === target) window.setTimeout(() => nextWord(true), 120);
  }

  return <main className="typing-app">
    <header className="simple-header"><div><h1>UrduMaster</h1><p>Simple Urdu typing practice</p></div><div className="header-actions"><div className="layout-status">Standard Urdu layout</div><button className="theme-toggle" onClick={() => setTheme((value) => value === "light" ? "dark" : "light")} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>{theme === "light" ? "Dark" : "Light"}</button></div></header>
    <ModeTabs mode={mode} onChange={changeMode} />
    {mode === "practice" ? <div className="course-layout"><LessonSidebar lessons={lessons} currentLesson={lessonNumber} completedLessons={completedLessons} maxUnlocked={maxUnlocked} onSelect={selectLesson} /><div className="practice-column"><div className="lesson-intro"><span className="label">{lesson.title} · {lesson.stage.replace("shift-", "Shift + ")}</span><h2>{lesson.description}</h2><p>{lesson.kind === "words" ? "Short words first. Build accuracy before speed." : lesson.kind === "lines" ? "Now bring the row into complete Urdu lines." : "Keep earlier rows active while adding new reaches."}</p></div><div className="typing-surface"><PracticePanel target={target} text={text} states={states} score={score} seconds={seconds} wordsDone={wordsDone} duration={duration} finished={finished} inputRef={practiceInputRef} onChange={updatePracticeText} onKeyDown={handlePhysicalKey} onFocus={() => { if (seconds > 0) setRunning(true); }} onReset={resetPractice} onNext={nextWord} onDurationChange={changeDuration} onStart={startSession} /><VirtualKeyboard selectedKey={selectedKey} errorKey={errorKey} targetKeyCode={nextCharacter === " " ? "Space" : nextKey?.code} targetNeedsShift={targetNeedsShift} shiftActive={shiftActive} onShiftToggle={() => setShiftActive((value) => !value)} onKeyClick={clickKey} /></div></div></div> : <div className="typing-surface"><WritingPanel text={text} inputRef={writingInputRef} onChange={setText} onKeyDown={handlePhysicalKey} onClear={() => { setText(""); focusActiveInput(); }} /><VirtualKeyboard selectedKey={selectedKey} errorKey={errorKey} targetKeyCode={nextCharacter === " " ? "Space" : nextKey?.code} targetNeedsShift={targetNeedsShift} shiftActive={shiftActive} onShiftToggle={() => setShiftActive((value) => !value)} onKeyClick={clickKey} /></div>}
    <p className="footer-note">Your practice stays on this device. Click a key to type Urdu, or use your physical Windows Urdu layout.</p>
  </main>;
}
