import { describe, expect, it } from "vitest";
import { standardUrduKeyboard } from "./keyboard";

describe("standard Urdu keyboard mapping", () => {
  const key = (code: string) => standardUrduKeyboard.find((item) => item.code === code);

  it("matches the home row and QWERTY letter rows", () => {
    expect(key("KeyA")).toMatchObject({ output: "م", shifted: "ژ" });
    expect(key("KeyS")).toMatchObject({ output: "و", shifted: "ز" });
    expect(key("KeyQ")).toMatchObject({ output: "ط", shifted: "ظ" });
    expect(key("KeyW")).toMatchObject({ output: "ص", shifted: "ض" });
    expect(key("KeyZ")).toMatchObject({ output: "ق", shifted: "‍" });
  });

  it("preserves punctuation, digits, and both backslash keys", () => {
    expect(key("Digit5")).toMatchObject({ output: "5", shifted: "٪" });
    expect(key("BracketLeft")).toMatchObject({ output: "]", shifted: "}" });
    expect(key("BracketRight")).toMatchObject({ output: "[", shifted: "{" });
    expect(key("Backslash")).toMatchObject({ output: "\\", shifted: "|" });
    expect(key("IntlBackslash")).toMatchObject({ output: "\\", shifted: "|" });
    expect(key("Slash")).toMatchObject({ output: "/", shifted: "؟" });
  });
});
