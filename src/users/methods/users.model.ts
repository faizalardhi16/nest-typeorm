import { ApiProperty, PartialType } from "@nestjs/swagger";

export class IUser {
    @ApiProperty()
    id: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    fullname: string;
}

export class CreateUserDtos {
    @ApiProperty()
    username: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    fullname: string;

    @ApiProperty()
    age: number;
}

export class UpdateUserDto extends PartialType(CreateUserDtos){
    @ApiProperty()
    id: string;
}

