const buffer = Buffer.from("Muhamad Rahmat Fadila", "utf-8");

console.info("ini utf-8 = ", buffer.toString("utf-8"));
console.info("ini hex = ", buffer.toString("hex"));
console.info("ini base64 = ", buffer.toString("base64"));
console.info("ini ascii = ", buffer.toString("ascii"));
console.info("ini latin1 = ", buffer.toString("latin1"));
console.info("ini utf-8 = ", buffer.toString("binary"));
console.info("ini binary = ", buffer.toString("ucs2"));
console.info("ini ucs-2 = ", buffer.toString("ucs-2"));

const bufferBase64 = Buffer.from("TXVoYW1hZCBSYWhtYXQgRmFkaWxh", "base64");

console.info(bufferBase64.toString("utf-8"));