import { standardUrduKeyboard, type KeyboardKey } from "@/lib/keyboard";

type VirtualKeyboardProps = { selectedKey: string; errorKey?: string; targetKeyCode?: string; targetNeedsShift: boolean; shiftActive: boolean; onShiftToggle: () => void; onKeyClick: (key: KeyboardKey) => void };

const rows = [
  ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal"],
  ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash"],
  ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"],
  ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight"],
  ["Space"],
];

export function VirtualKeyboard({ selectedKey, errorKey, targetKeyCode, targetNeedsShift, shiftActive, onShiftToggle, onKeyClick }: VirtualKeyboardProps) {
  const keyMap = new Map(standardUrduKeyboard.map((key) => [key.code, key]));
  const modifier = (code: string, label: string, className = "") => <button key={code} className={`key modifier ${className} ${shiftActive && label === "Shift" ? "highlight" : ""} ${label === "Shift" && targetNeedsShift && !shiftActive ? "next-key" : ""}`} onClick={label === "Shift" ? onShiftToggle : undefined}>{label}</button>;

  return <section className="keyboard-card">
    <div className="keyboard-heading"><div><h2>Urdu keyboard</h2><p>{targetNeedsShift && !shiftActive ? "Press Shift first, then the highlighted key." : "The highlighted key is next. Click a key to type."}</p></div><span className="selected-output urdu">{keyMap.get(selectedKey)?.[shiftActive ? "shifted" : "output"] || " "}</span></div>
    <div className="keyboard">{rows.map((row, rowIndex) => <div className={`keyboard-row row-${rowIndex}`} key={rowIndex}>{row.map((code) => { const key = keyMap.get(code); if (code === "Tab") return modifier(code, "Tab", "tab"); if (code === "CapsLock") return modifier(code, "Caps", "caps"); if (code === "Enter") return modifier(code, "Enter", "enter"); if (code === "ShiftLeft" || code === "ShiftRight") return modifier(code, "Shift", "shift"); if (code === "Space") return <button className={`key space ${targetKeyCode === code ? "next-key" : ""} ${errorKey === code ? "error" : ""}`} key={code} onClick={() => onKeyClick(keyMap.get("Space")!)}>Space</button>; if (!key) return null; const output = shiftActive ? (key.shifted ?? key.output) : key.output; const isNextKey = targetKeyCode === key.code && (!targetNeedsShift || shiftActive); return <button className={`key ${selectedKey === key.code ? "highlight" : ""} ${isNextKey ? "next-key" : ""} ${errorKey === key.code ? "error" : ""}`} key={key.code} onClick={() => onKeyClick(key)} aria-label={`${key.label}: ${output || "space"}`}><b>{key.label}</b>{output && <span>{output}</span>}</button>; })}</div>)}</div>
  </section>;
}
