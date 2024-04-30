import { sayHello } from "../src/sayHello"

test("sayHello success", () => {
    expect(sayHello("Rahmat")).toBe("Hello Rahmat")
});

// failing itu mengharapkan testnya gagal bukan success jdi contohnya jika seperti ini sayHello("Rahmat"); maka codenya akan error jika sayHello(null); maka codenya akan success
test.failing("sayHello error", () => {
    sayHello(null);
});

test("sayHello error matchers", () => {
    expect(() => sayHello(null)).toThrow();
})