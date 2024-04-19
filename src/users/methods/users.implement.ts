import { Output } from "utils/object.response";
import { CreateUserDtos, UpdateUserDto } from "./users.model";
import { User } from "./user.entity";

export class IUserService{
    findAllUser: () => Promise<Output<User[]>>;
    getDetailUser: (id: string) => void;
    createUser: (user: CreateUserDtos) => Promise<Output<User>>;
    updateUser: (body: UpdateUserDto) => Promise<Output<User>>;
    deleteUser: (id: string) => void;
}