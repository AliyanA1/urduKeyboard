import type { Lesson } from "@/lib/practice";

type LessonSidebarProps = { lessons: Lesson[]; currentLesson: number; completedLessons: number[]; maxUnlocked: number; onSelect: (lesson: number) => void };

export function LessonSidebar({ lessons, currentLesson, completedLessons, maxUnlocked, onSelect }: LessonSidebarProps) {
  return <aside className="lesson-sidebar" aria-label="Typing lessons">
    <div className="lesson-sidebar-heading"><span className="label">Course path</span><strong>{completedLessons.length} / {lessons.length} complete</strong></div>
    <div className="lesson-list">{lessons.map((lesson) => {
      const locked = lesson.number > maxUnlocked;
      const completed = completedLessons.includes(lesson.number);
      return <button key={lesson.number} className={`lesson-item ${lesson.number === currentLesson ? "current" : ""} ${completed ? "completed" : ""}`} onClick={() => !locked && onSelect(lesson.number)} disabled={locked} aria-label={`${lesson.title}${locked ? ", locked" : ""}`}>
        <span className="lesson-number">{completed ? "✓" : lesson.number}</span>
        <span className="lesson-copy"><strong>{lesson.title}</strong><small>{lesson.stage === "full" ? "Full keyboard" : lesson.stage.replace("shift-", "Shift + ")}</small></span>
        <span className="lesson-status">{locked ? "Lock" : completed ? "Done" : lesson.number === currentLesson ? "Now" : "Start"}</span>
      </button>;
    })}</div>
  </aside>;
}
