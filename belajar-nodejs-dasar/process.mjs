import process from "process";

process.addListener("exit", (exitCode) => {
    console.info(`NodeJS exit with code ${exitCode}`);
})

console.info(process.version);
console.table(process.argv); // tipe array
console.table(process.report); 
console.table(process.env); 

process.exit(1);

// tidak akan muncul karena di atas sudah di exit
console.info("Hello World");