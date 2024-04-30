import { getBalance } from "../src/async";

test("mock async function", async () => {
    const from = jest.fn();
    from.mockResolvedValueOnce(1000); // mockResolvedValueOnce = sekali, mockResolvedValue = terus-terusan

    expect(getBalance("Rahmat", from)).resolves.toEqual({ name: "Rahmat", balance: 1000 }); // karena dia mengembalikan nilai promise maka menggunakan resolves

    expect(from.mock.calls.length).toBe(1); // panjang array yang di kembalikan 
    await expect(from.mock.results[0].value).resolves.toBe(1000); // mengembalikan 1000 dari mockResolvedValueOnce dan karena promise jdi memkaia resolves dan await
});

// jika expektasinay error tambahkan saja failing supaya Pass (recomended cara untuk jadi Pass)
test.failing("mock async function rejected", async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce(new Error("Ups")); // from memgembalikan error makannya di pakai failing untuk jadi Pass

    await getBalance("Rahmat", from);
});

// (tidak recomended cara untuk jadi Pass)
test("mock async function error matchers", async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce("Rejected");

    await expect(getBalance("Rahmat", from)).rejects.toBe("Rejected");
});

