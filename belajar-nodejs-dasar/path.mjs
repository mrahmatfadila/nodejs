import path from "path";

const file = "/Users/rahmat/contoh.txt";

console.info(path.dirname(file));
console.info(path.extname(file));
console.info(path.basename(file));
console.info(path.parse(file));
console.info(path.join("/Users", "rahmat", "contoh.txt"))