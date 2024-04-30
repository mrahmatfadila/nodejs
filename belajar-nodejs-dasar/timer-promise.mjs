import timers from "timers/promises";

// console.info(new Date());
// const name = await timers.setTimeout(5000, "Rahmat");
// console.info(new Date());
// console.info(name);

// Cara yang 1 versi promise
// const date = new Date();
// for await (const startTime of timers.setInterval(1000, date)) {
//     console.info(`start time at ${startTime}`);
// }

// Cara yang 2 versi callback
for await (const startTime of timers.setInterval(1000, "ignored")) {
    console.info(`start time at ${new Date()}`);
}
