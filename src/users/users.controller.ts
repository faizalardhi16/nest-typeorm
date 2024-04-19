import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDtos, IUser, UpdateUserDto } from './methods/users.model';
import { Output } from 'utils/object.response';
import { ApiParam } from '@nestjs/swagger';
import { User } from './methods/user.entity';

@Controller('users')
export class UsersController {
    constructor(private queries: UsersService){}

    @Get("findAllUser")
    public async findAllUser(): Promise<Output<User[]>>{
        const result = await this.queries.findAllUser();
        return result;
    }

    @Get("findAllUser/:id")
    @ApiParam({
        name: 'id',
        type: 'string',
        description: 'user id'
    })
    public async findUser(@Param() param: {id: string}): Promise<Output<IUser>>{
        const {id} = param;
        const result = await this.queries.getDetailUser(id);
        return result;
    }

    @Post("createUser")
    public async createUser(@Body() body: CreateUserDtos): Promise<Output<User>> {
        const result = await this.queries.createUser(body);

        return result;
    }

    @Patch("updateUser")
    public async updateUser(@Body() body: UpdateUserDto): Promise<Output<User>>{
        const result = await this.queries.updateUser(body);

        return result;
    }

    


}
