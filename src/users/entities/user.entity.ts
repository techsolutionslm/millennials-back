import { BaseEntity } from "../../config/Base.entity";
import { Entity, Column } from "typeorm";
import { IUser } from "../interfaces/IUser";

@Entity({name:'user'})
export class UserEntity extends BaseEntity implements IUser {
    @Column()
    name: string;
    @Column()
    lastName: string;
    @Column()
    sLastName: string;
    @Column()
    gender: string;
    @Column({ unique: true })
    email: string;
    @Column()
    password: string
}