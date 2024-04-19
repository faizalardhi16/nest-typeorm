import { Column, Entity } from "typeorm";
import { BaseEntity } from "utils/base.entity";

@Entity()
export class User extends BaseEntity{
    @Column({length: 100})
    username: string;

    @Column({length: 100})
    email: string;

    @Column({length: 100})
    fullname: string;

    @Column()
    age: number;

    @Column({nullable: true, length: 250})
    avatar: string;
}