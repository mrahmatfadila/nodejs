import fs from "fs";
import zlib from "zlib";

// zlib berguna untuk mengirim data dalam ukuran kecil supaya di terimanya dalam ukuran kecil dan baru di kompres dan di dekompres agar isi file kembali ke semula

const source = fs.readFileSync("zlib-compress.mjs");
const result = zlib.gzipSync(source);

fs.writeFileSync("zlib-compress.mjs.txt", result);

