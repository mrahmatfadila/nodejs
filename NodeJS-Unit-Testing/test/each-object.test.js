import { sumAll } from "../src/sum"

const table = [
    {
        numbers: [], // ($numbers) => numbers
        expected: 0 // $expected => expected
    },
    {
        numbers: [10], // ($numbers) => numbers
        expected: 10 // $expected => expected
    },
    {
        numbers: [10, 10, 10], // ($numbers) => numbers
        expected: 30 // $expected => expected
    },
    {
        numbers: [10, 10, 10, 10, 10], // ($numbers) => numbers
        expected: 50 // $expected => expected
    },
    {
        numbers: [10, 10, 10, 10, 10, 10, 10], // ($numbers) => numbers
        expected: 70 // $expected => expected
    },
];

test.each(table)("test sumAll($numbers) should result $expected", ({numbers, expected}) => {
    expect(sumAll(numbers)).toBe(expected);
})