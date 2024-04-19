import { Column, CreateDateColumn, Entity, Generated, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class BaseEntity{
    @PrimaryColumn({type:'uuid'})
    @Generated("uuid")
    id: string;

    @CreateDateColumn({type: "timestamptz"})
    creation_date: Date;

    @UpdateDateColumn({type: "timestamptz"})
    update_date: Date;
}