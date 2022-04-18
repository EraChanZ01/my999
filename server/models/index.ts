import UserModel, { UserType } from './User';
import { asClass, asValue } from 'awilix';


export interface IModelContainer {
    UserModel: UserType;

}

export default {
    UserModel: asValue(UserModel),
}