import { getAllProducts, getProductById } from "../src/database";
import { ProductService } from "../src/product-service"

jest.mock("../src/database"); // jika tidak mock jika di running maka akan error di bagian mockImplementation tidak di mengerti, disini saya kasih mock supaya bisa Pass mockImplementation

test("mock modules getProductById", () => {
    getProductById.mockImplementation((id) => {
        return {id, name: "Product Mock"}
    })
    const product = ProductService.findById(1);

    expect(product).toEqual({id: 1, name: "Product Mock"});
})

test("mock modules getAllProducts", () => {
    const products = [
        {
            id: 1, 
            name: "Product Mock"
        },
        {
            id: 2, 
            name: "Product Mock"
        }
    ];

    getAllProducts.mockImplementation(() => {
        return products;
    });

    expect(ProductService.findAll()).toEqual(products);
})