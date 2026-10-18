import { describe, expect, it } from "vitest";
import { getLessonContent, lessons, practiceLines, practiceWords, shuffledPracticeContent } from "./practice";

describe("practice content", () => {
  it("provides a large mixed bank of words and office lines", () => {
    const content = shuffledPracticeContent(1);
    expect(content.length).toBeGreaterThan(100);
    expect(content.some((item) => practiceWords.includes(item))).toBe(true);
    expect(content.some((item) => practiceLines.includes(item))).toBe(true);
  });

  it("does not duplicate items within one queue and changes the order for a new session", () => {
    const first = shuffledPracticeContent(1);
    const second = shuffledPracticeContent(2);
    expect(new Set(first).size).toBe(first.length);
    expect(new Set(second).size).toBe(second.length);
    expect(first).not.toEqual(second);
  });

  it("builds a 40-lesson cumulative course", () => {
    expect(lessons).toHaveLength(40);
    expect(lessons[0].kind).toBe("words");
    expect(lessons[2].kind).toBe("lines");
    expect(lessons[30].stage).toBe("full");
    expect(getLessonContent(1, 1).length).toBeLessThanOrEqual(10);
    expect(getLessonContent(31, 1).every((item) => item.includes(" "))).toBe(true);
  });
});