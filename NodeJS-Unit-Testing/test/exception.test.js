import { MyException, callMe } from "../src/exception"

test("exception", () => {
    expect(() => callMe("Rahmat")).toThrow(); //apapun jenis exception dia akan di terima
    expect(() => callMe("Rahmat")).toThrow(MyException); // exceptionya harus jenisnya MyException jika bukan maka akan error
    expect(() => callMe("Rahmat")).toThrow("Ups my exception happens"); // tidak peduli jenis exceptionya apa yang terpenting jenis Message apa
});

// untuk mengcover file exception.js yg nilai dapat 75%
test("exception not happens", () => {
    expect(callMe("Budi")).toBe("OK")
})