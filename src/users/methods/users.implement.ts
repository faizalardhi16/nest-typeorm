import { Output } from "utils/object.response";
import { CreateUserDto, IUser } from "./users.model";

export class IUserService{
    getUser: () => Promise<Output<IUser[]>>;
    getDetailUser: (id: string) => void;
    createUser: (user: CreateUserDto) => void;
    updateUser: (id: string) => void;
    deleteUser: (id: string) => void;
}