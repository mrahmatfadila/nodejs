test("test toBe", () => {
    const name = "Rahmat";
    const hello = `Hello ${name}`;

    expect(hello).toBe("Hello Rahmat");
});

test("test toEqual", () => {
    let person = {id: "Rahmat"};
    Object.assign(person, {name: "Fadil"});

    expect(person).toEqual({id: "Rahmat", name: "Fadil"})
})

