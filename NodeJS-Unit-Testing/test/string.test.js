test("string", () => {
    const name = "Muhamad Rahmat Fadila";

    expect(name).toBe("Muhamad Rahmat Fadila"); // name sma dengan Muhamad Rahmat Fadila
    expect(name).toMatch(/ahmat/); // menggunakan regex /ahmat/ untuk mencari kata yang ada di dalam name 
})