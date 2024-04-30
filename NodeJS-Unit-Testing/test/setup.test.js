import { sum } from "../src/sum";

// Jika memakai async dan semuanya sama seperti ini jika di menggunakan async
// beforeAll(async () => {
//     console.info("Before All")
// });

// contoh menggunakan async
beforeAll(async () => {
    console.info("Before All")
});

afterAll(() => {
    console.info("After All")
});

beforeEach(() => {
    console.info("Before Each");
}); 

afterEach(() => {
    console.info("After Each");
});

test('first test', () => { 
    expect(sum(10, 10)).toBe(20);
    console.info("First Test");
 });
test('second test', () => { 
    expect(sum(10, 10)).toBe(20);
    console.info("Second Test");
 });

//  Prosesnya beforeAll -> beforeEach -> first test -> afterEach ->
//  Prosesnya beforeEach -> second test -> afterEach -> afterAll
