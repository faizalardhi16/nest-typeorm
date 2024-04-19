import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateUserDtos, IUser, UpdateUserDto } from './methods/users.model';
import { IUserService } from './methods/users.implement';
import { userFaker } from './methods/users.faker';
import { Output, ResponseObject } from 'utils/object.response';
import { Repository } from 'typeorm';
import { User } from 'src/users/methods/user.entity';

@Injectable()
export class UsersService implements IUserService {

    private users: IUser[] = userFaker();
    private response: ResponseObject = new ResponseObject();

    constructor(@Inject('USER_REPOSITORY') private userRepository: Repository<User>){}

    public async findAllUser(): Promise<Output<User[]>>{
        const result: Awaited<User[]>  = await this.userRepository.find();
        return (await this.response.ok<User[]>(result));
    }

    public async getDetailUser(id: string): Promise<Output<User>>{
        const findUser:Awaited<User> = await this.userRepository.findOneBy({id});
        if(!findUser){
            throw new NotFoundException("User Not Found");
        }
        const result = await this.response.ok<User>(findUser);
        return result;
    }

    public async createUser(user: CreateUserDtos): Promise<Output<User>>{
        const result: Awaited<User> = await this.userRepository.save(user);
        return (await this.response.ok<User>(result));
    }

    public async updateUser(body: UpdateUserDto): Promise<Output<User>>{
        const findOne: Awaited<User> = await this.userRepository.findOneBy({id: body.id});

        if(!findOne) throw new NotFoundException("User Not Found");

        const obj = Object.keys(body).map((item) => item);

        for(const a of obj){
            findOne[a] = body[a];
        }

        const res = await this.userRepository.save(findOne);

        return (await this.response.ok<User>(res))
    }

    deleteUser(id: string){

    }
}
