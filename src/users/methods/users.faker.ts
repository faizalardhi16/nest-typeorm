import { IUser } from "./users.model"
import {faker} from '@faker-js/faker';

export const userFaker = () => {
    let userData: IUser[] = [];

    for(let i = 0;i<5;i++){
        const obj: IUser = {
            id: faker.string.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            fullname: faker.person.fullName()
        }

        userData.push(obj)
    }

    return userData;
}