import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

jest.mock("../src/user-repository");

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock user save", () => {
    const user = {
        id: 1,
        name: "Rahmat"
    };

    service.save(user);

    expect(repository.save).toHaveBeenCalled();
    expect(repository.save).toHaveBeenCalledWith(user);
});

test("test mock user findById", () => {
    const user = {
        id: 1,
        name: "Rahmat"
    };

    repository.findById.mockReturnValueOnce(user);

    expect(service.findById(1)).toEqual(user);
    expect(repository.findById).toHaveBeenCalled();
    expect(repository.findById).toHaveBeenCalledWith(1);
})

test("test mock user findAll", () => {
    const user = [
        {
            id: 1,
            name: "Rahmat"
        },
        {
            id: 2,
            name: "Rahmat"
        }
    ];

    repository.findAll.mockReturnValueOnce(user);
    expect(service.findAll()).toEqual(user);
    expect(repository.findAll).toHaveBeenCalled();
})