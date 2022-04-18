import { asClass, asValue } from 'awilix';

import UserService from './UserService';




export interface IServicesContainer {
    UserService: UserService;

}

export default {
    UserService: asClass(UserService).singleton(),

}