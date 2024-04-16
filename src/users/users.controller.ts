import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './methods/users.model';
import { Output } from 'utils/object.response';
import { ApiParam } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
    constructor(private queries: UsersService){}

    @Get("findAllUser")
    findAllUser(): Promise<Output<IUser[]>>{
        const result = this.queries.getUser();
        return result;
    }

    @Get("findAllUser/:id")
    @ApiParam({
        name: 'id',
        type: 'string',
        description: 'user id'
    })
    findUser(@Param() id: string): Promise<Output<IUser>>{
        const result = this.queries.getDetailUser(id);
        return result;
    }


}
