export const sayHelloAsync = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(name) {
                resolve(`Hello ${name}`)
            } else {
                reject(`Name is empty`);
            }
        }, 1000); // jika sudah 1 detik maka akan di cek jika name nya ada maka jalankan resolve
    })
}

export const getBalance = async (name, from) => {
    const balance = await from();
    return {
        name: name,
        balance: balance
    };
};