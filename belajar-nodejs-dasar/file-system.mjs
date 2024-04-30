// untuk yang mengunakan file system promises
import fs from "fs/promises";

// // untuk yang mengunakan file system callback
// import fs from "fs";

// untuk melihat isi file os.mjs atau membaca isi file
const buffer = await fs.readFile("os.mjs");
console.info(buffer.toString());

// karena pakai promises kita menggunakan async await
await fs.writeFile("temp.txt", "Hello nodejs");