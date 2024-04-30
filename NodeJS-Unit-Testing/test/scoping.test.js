beforeAll(() => console.info("Before All Outer"));
afterAll(() => console.info("After All Outer"));
beforeEach(() => console.info("Before Each All Outer"));
afterEach(() => console.info("After Each All Outer"));

test("Test Outer", () => console.info("Test Outer"))

describe("Inner 1", () => {
    beforeAll(() => console.info("Before All Inner"));
    afterAll(() => console.info("After All Inner"));

    beforeEach(() => console.info("Before Each All Inner"));
    afterEach(() => console.info("After Each All Inner"));

    test("Test Inner", () => console.info("Test Inner"))
})

describe("Inner 2", () => {
    beforeEach(() => console.info("Before Each All Inner"));
    afterEach(() => console.info("After Each All Inner"));
    test("Test Inner", () => console.info("Test Inner"));
    describe("Inner inner scope", () => {
        beforeEach(() => console.info("Before Each All Inner"));
        afterEach(() => console.info("After Each All Inner"));
        test("Test 1", () => console.info("Test 1"));
    
    })
})