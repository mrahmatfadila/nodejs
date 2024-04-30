// Array Matchers
test("array simple", () => {
    const names = ["Muhamad", "Rahmat", "Fadila"];
    expect(names).toContain("Rahmat"); // bisa di cek satu satu
    expect(names).toEqual(["Muhamad", "Rahmat", "Fadila"]); // ini harus di cek semuanya
});

test("Array Object", () => {
    const persons = [
        {
            name: "Rahmat"
        },
        {
            name: "Haekal"
        }
    ];
    expect(persons).toContainEqual({name: "Rahmat"}); // bisa di cek satu satu dalam bentuk array object
    expect(persons).toEqual([
    {
        name: "Rahmat"
    },
    {
        name: "Haekal"
    }]) // ini harus di cek semuanya
})