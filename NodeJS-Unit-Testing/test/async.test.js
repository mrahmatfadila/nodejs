import { sayHelloAsync } from "../src/async"

test("test async function", async () => {
    const result = await sayHelloAsync("Rahmat"); // menggunakan async await
    expect(result).toBe("Hello Rahmat"); // kita mengirimkan "Rahmat" ke sayHelloAsync dan di kembalikan true karena ada value atau nilai
})

test("test async mathers", async () => {
    await expect(sayHelloAsync("Rahmat")).resolves.toBe("Hello Rahmat"); // jika ada namenya maka dia akan mengembalikan resolves dengan toBe "Hello Rahmat" yang akan bernilai Pass
    await expect(sayHelloAsync()).rejects.toBe("Name is empty") // jika tidak ada namenya maka dia akan mengembalikan rejects dengan toBe "Name is empty" yang akan bernilai Pass
})