import type { RefObject } from "react";

type WritingPanelProps = { text: string; inputRef: RefObject<HTMLTextAreaElement | null>; onChange: (value: string) => void; onKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void; onClear: () => void };

export function WritingPanel({ text, inputRef, onChange, onKeyDown, onClear }: WritingPanelProps) {
  return <section className="write-card"><span className="label">Write anything in Urdu</span><textarea ref={inputRef} className="urdu-input write-input" value={text} onChange={(event) => onChange(event.target.value)} onKeyDown={onKeyDown} dir="rtl" placeholder="یہاں اردو لکھیں..." aria-label="Free Urdu writing area" spellCheck={false}/><div className="actions"><span className="muted">{text.length} characters</span><button onClick={onClear}>Clear</button></div></section>;
}
