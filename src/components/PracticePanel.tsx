import type { RefObject } from "react";
import { durationOptions } from "@/lib/practice";

type PracticePanelProps = { target: string; text: string; states: string[]; score: number; seconds: number; wordsDone: number; duration: number; finished: boolean; inputRef: RefObject<HTMLInputElement | null>; onChange: (value: string) => void; onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void; onFocus: () => void; onReset: () => void; onNext: () => void; onDurationChange: (duration: number) => void; onStart: () => void };

export function PracticePanel({ target, text, states, score, seconds, wordsDone, duration, finished, inputRef, onChange, onKeyDown, onFocus, onReset, onNext, onDurationChange, onStart }: PracticePanelProps) {
  if (finished) return <section className="practice-card session-finished"><span className="label">Session complete</span><h2>Well typed</h2><div className="finished-stats"><strong>{wordsDone}</strong><span>words completed</span><strong>{score}%</strong><span>last word accuracy</span></div><p className="muted">Start again with a fresh mix of Urdu words and office lines.</p><button className="primary big-button" onClick={onStart}>Start again with new words</button></section>;

  return <section className="practice-card">
    <div className="practice-top"><div><span className="label">Type this {target.includes(" ") ? "line" : "word"}</span><div className="target urdu">{Array.from(target).map((character, index) => <span key={`${character}-${index}`} className={states[index]}>{character}</span>)}</div></div><div className="session-info"><strong>{Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}</strong><span>{wordsDone} completed</span></div></div>
    <div className="duration-picker"><span className="muted">Session time</span>{durationOptions.map((option) => <button key={option} className={duration === option ? "active" : ""} onClick={() => onDurationChange(option)}>{option < 60 ? `${option}s` : `${option / 60}m`}</button>)}</div>
    <input ref={inputRef} className="urdu-input" value={text} onChange={(event) => onChange(event.target.value)} onKeyDown={onKeyDown} onFocus={onFocus} dir="rtl" placeholder="یہاں اردو لکھیں" aria-label="Urdu practice input" autoComplete="off" spellCheck={false}/>
    <div className="result-line"><span>{score}% correct</span><span>{text.length} / {target.length} characters</span></div>
    <div className="actions"><button onClick={onReset}>Clear</button><button className="primary" onClick={onNext}>{text === target ? "Next" : "Skip"}</button></div>
  </section>;
}
