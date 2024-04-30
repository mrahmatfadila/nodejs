test("test 1", () => console.info("test 1"));
test("test 2", () => console.info("test 2"));
test.skip("test 3", () => console.info("test 3")); // test.skip untuk skip test 3 jadi tidak perlu di hapus jika kode program belum selesai
test("test 4", () => console.info("test 4"));
test("test 5", () => console.info("test 5"));