import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, IUser } from './methods/users.model';
import { IUserService } from './methods/users.implement';
import { userFaker } from './methods/users.faker';
import { Output, ResponseObject } from 'utils/object.response';

@Injectable()
export class UsersService implements IUserService {

    private users: IUser[] = userFaker();
    private response: ResponseObject = new ResponseObject();

    async getUser(): Promise<Output<IUser[]>>{
        const result = await this.response.ok<IUser[]>(this.users);
        return result;
    }

    async getDetailUser(id: string): Promise<Output<IUser>>{

        const findOne = this.users.find((item) => item.id === id)

        if(!findOne){
            throw new NotFoundException("User Not Found");
        }

        const result = await this.response.ok<IUser>(findOne);

        return result;
        
    }

    createUser(user: CreateUserDto){

    }

    updateUser(id: string){

    }

    deleteUser(id: string){

    }
}
