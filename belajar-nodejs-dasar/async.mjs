// function samplePromie() {
//     return Promise.resolve("Rahmat");
// }

// const name = await samplePromie();
// console.info(name);

function samplePromie() {
    return Promise.resolve("Fadil");
}

const name = await samplePromie();
console.info(name);

// default async itu udh otomatis ada di programnya jdi tinggal di panggil await saja beda dengan file js dia harus di bikin function async baru di dalamnya fcunction di isi await