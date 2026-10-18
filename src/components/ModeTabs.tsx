type Mode = "practice" | "write";

type ModeTabsProps = { mode: Mode; onChange: (mode: Mode) => void };

export function ModeTabs({ mode, onChange }: ModeTabsProps) {
  return <div className="mode-tabs" role="tablist" aria-label="Typing mode">
    <button className={mode === "practice" ? "selected" : ""} onClick={() => onChange("practice")}>Practice words</button>
    <button className={mode === "write" ? "selected" : ""} onClick={() => onChange("write")}>Write Urdu</button>
  </div>;
}
