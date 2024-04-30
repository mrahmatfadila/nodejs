import { calculate } from "../src/sum";

test("test mock matchers", () => {
    const callback = jest.fn();

    calculate([10, 10, 10], callback);
    calculate([10, 10, 10, 10, 10], callback);

    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback.mock.calls[0][0]).toBe(30);
    expect(callback.mock.calls[1][0]).toBe(50);

    // Ntah kenapa Error
    // expect(callback).toHaveBeenCalledWith(30); 
    // expect(callback).toHaveBeenCalledWith(50);
});