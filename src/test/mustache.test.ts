import { test, expect } from "vitest";
import mustache from "../mustache";

test("render user's info", () => {
  const template = "User : {{ user.name }} ({{ user.age }}, {{ user.email }})";
  const data = {
    user: {
      name: "Hello",
      email: "hello@wor.ld",
      age: 20,
    },
  };

  expect(mustache(template).render(data)).toBe(
    "User : Hello (20, hello@wor.ld)"
  );
});
