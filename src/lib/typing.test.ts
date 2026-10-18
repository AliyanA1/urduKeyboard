import { describe, expect, it } from "vitest";
import { accuracy, compareTyping, normalizeUrdu } from "./typing";

describe("Urdu typing engine", () => {
  it("normalizes composed Unicode without changing visible text", () => {
    expect(normalizeUrdu("ی\u200d")) .toBe("ی");
  });

  it("marks missing, correct, and incorrect characters", () => {
    expect(compareTyping("نام", "نا")).toEqual(["correct", "correct", "pending"]);
    expect(compareTyping("نام", "نیم")).toEqual(["correct", "incorrect", "correct"]);
  });

  it("calculates attempted accuracy", () => {
    expect(accuracy("نام", "نا")).toBe(100);
    expect(accuracy("نام", "نی")).toBe(50);
    expect(accuracy("نام", "")).toBe(0);
  });
});
