// function samplePromie() {
//     return Promise.resolve("Rahmat");
// }

// async function run() {
//     const name = await samplePromie();
//     console.info(name);
// }

// run();

function samplePromise() {
    return Promise.resolve("Mamat");
}

async function run() {
    const name = await samplePromise();
    console.log(name);
}

run();