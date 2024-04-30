import { sumAll } from "../src/sum"

// test("sumAll([10, 10, 10])", () => {
//     expect(sumAll([10, 10, 10])).toBe(30)
// });

// test("sumAll([10, 10, 10, 10, 10])", () => {
//     expect(sumAll([10, 10, 10, 10, 10])).toBe(50)
// });

const table = [
    [
        [], // %s numbers
        0 // %i expected
    ],
    [
        [10], // %s numbers
        10 // %i expected
    ],
    [
        [10, 10, 10], // %s numbers
        30 // %i expected
    ],
    [
        [10, 10, 10, 10, 10], 
        50
    ],
    [
        [10, 10, 10, 10, 10, 10, 10],
        70
    ],
];

test.each(table)("test sumAll(%s) should result %i", (numbers, expected) => {
    expect(sumAll(numbers)).toBe(expected);
})