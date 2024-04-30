import { sayHelloAsync } from "../src/async";

// concurrent itu di jalankan sekaligus biasanya kan satu satu tapi dengan menggunakan concurrent maka akan di jalankan secara sekaligus dalam waktu 1 detik
test.concurrent("concurrent 1", async () => {
    await expect(sayHelloAsync("Rahmat")).resolves.toBe("Hello Rahmat");
})

test.concurrent("concurrent 2", async () => {
    await expect(sayHelloAsync("Rahmat")).resolves.toBe("Hello Rahmat");
})

test.concurrent("concurrent 3", async () => {
    await expect(sayHelloAsync("Rahmat")).resolves.toBe("Hello Rahmat");
})