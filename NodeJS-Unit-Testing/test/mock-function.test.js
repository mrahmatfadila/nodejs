import { calculate, calculateAndReturn } from "../src/sum";

test("test calculate", () => {
    const callback = jest.fn(); // function tiruan karena di bikin menggunakan jest
    calculate([10, 10, 10], callback);
    calculate([10, 10, 10, 10, 10], callback);

    expect(callback.mock.calls.length).toBe(2);
    console.info(callback.mock.calls); // [ [ 30, 'Rahmat' ], [ 50, 'Rahmat' ] ]
    expect(callback.mock.calls[0][0]).toBe(30);
    expect(callback.mock.calls[1][0]).toBe(50);
});

test("test calculate without mock function", () => {
    const logging = (total) => {
        console.info(total);
    };

    calculate([10, 10, 10], logging);
    calculate([10, 10, 10, 10, 10], logging);
});

test("test mock return value", () => {
    const callback = jest.fn();
    callback.mockReturnValueOnce(40);
    callback.mockReturnValueOnce(80);

    expect(calculateAndReturn([10, 10, 10], callback)).toBe(40); // mengembalikan 40 walaupun di jumlah 30 dia akan mengikuti mockReturnValueOnce
    expect(calculateAndReturn([10, 10, 10], callback)).toBe(80); // mengembalikan 80 walaupun di jumlah 30 dia akan mengikuti mockReturnValueOnce

    expect(callback.mock.results[0].value).toBe(40); // mengembalikan 40 walaupun di jumlah 30 dia akan mengikuti mockReturnValueOnce
    expect(callback.mock.results[1].value).toBe(80); // mengembalikan 80 walaupun di jumlah 30 dia akan mengikuti mockReturnValueOnce
});

test("test mock implementation", () => {
    const callback = jest.fn();
    callback.mockImplementation((total) => {
        return total * 2;
    });

    expect(calculateAndReturn([10, 10, 10], callback)).toBe(60); // mengembalikan 60 karena hasil dari [10, 10, 10] itu 30 di kalikan 2 maka 60
    expect(calculateAndReturn([10, 10, 10, 10, 10], callback)).toBe(100); // mengembalikan 100 karena hasil dari [10, 10, 10, 10, 10] itu 50 di kalikan 2 maka 100

    expect(callback.mock.results[0].value).toBe(60); // mengambil nilai dari results value callback dengan index 0 yaitu 60
    expect(callback.mock.results[1].value).toBe(100); // mengambil nilai dari results value callback dengan index 1 yaitu 100
})
