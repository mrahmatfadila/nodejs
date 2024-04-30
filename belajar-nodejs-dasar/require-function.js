const os = require("os");

console.info(os.platform());
console.table(os.cpus());

// require function versi lama kalo yang barunya menggunakan import