//Not Mathers (kebalikannya)
test("string.not", () => {
    const name = "Muhamad Rahmat Fadila";
    expect(name).not.toBe("Joko"); // karena joko tidak ada di dalam name berarti artinya false/error dengan di kasih not maka dia akan menghasilkan kebalikannya menjadi true/PASS
    expect(name).not.toEqual("Joko"); // karena joko tidak ada di dalam name berarti artinya false/error dengan di kasih not maka dia akan menghasilkan kebalikannya menjadi true/PASS
    expect(name).not.toMatch(/Joko/); // karena joko regex tidak ada di dalam name berarti artinya false/error dengan di kasih not maka dia akan menghasilkan kebalikannya menjadi true/PASS
})

test("number.not", () => {
    const value = 2 + 2;
    expect(value).not.toBeGreaterThan(6); // karena value lebih besar dari 6 itu false/error maka dengan di kasih not dia akan menghasilkan kebalikannya menjadi true/Pass
    expect(value).not.toBeLessThan(3); // karena value lebih kecil dari 3 itu false/error maka dengan di kasih not dia akan menghasilkan kebalikannya menjadi true/Pass
    expect(value).not.toBe(10); // karena value hasilnya 4 dan tidak sama dengan 10 maka akan error dengan not dia akan Pass
})