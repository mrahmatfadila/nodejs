test("test 1", () => console.info("test 1"));
test("test 2", () => console.info("test 2"));
test.only("test 3", () => console.info("test 3")); // test.only yang akan di jalankan, sisa yg ke test 1, 2, 4, 5 akan di skip
test("test 4", () => console.info("test 4"));
test("test 5", () => console.info("test 5"));