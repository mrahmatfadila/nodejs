test("numbers", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3); // value lebih besar dari 3
    expect(value).toBeGreaterThanOrEqual(4); // value lebih besar atau sama dengan 4
    expect(value).toBeLessThan(5); // value lebih kecil dari 5
    expect(value).toBeLessThanOrEqual(4); // value lebih kecil atau sama dengan 4

    expect(value).toBe(4); // value sama dengan 4
})