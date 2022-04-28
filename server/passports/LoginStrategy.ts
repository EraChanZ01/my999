import passportLocal from 'passport-local';
import { IContextContainer } from 'server/container'
import BaseContext from '../BaseContext'
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import {IIdentity} from '../constants'
import jwt from 'jsonwebtoken'

export default class LoginStrategy extends BaseContext {
    private strategyUser: passportLocal.Strategy;

    get strategy() {
        return this.strategyUser;
    }

    constructor(opts: IContextContainer) {
        super(opts);

        console.log('jwt: initialization Local-LogIn strategy');
        this.verifyRequestUser = this.verifyRequestUser.bind(this);

        this.strategyUser = new passportLocal.Strategy({
            passwordField: 'password',
            passReqToCallback: true,
            usernameField: 'email',
            session: false,

        }, this.verifyRequestUser);
    }

    public async verifyRequestUser(req: any, email: string, password: string, done: any) {
       
        const { UserModel } = this.di;
        const user = await UserModel.findOne({ email: email });
        if(!user.email){
            return done({ userEmail: 'Email is incorrect' });
        }
        const match = bcrypt.compareSync(password , user.password)
        if (!match) {
            return done({ userEmail: 'Password or email is incorrect' });
        
        }

        const token = jwt.sign(user.toJSON(), this.di.config.jwtToken);
        
        
        const identity: IIdentity = {
            userId: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            userEmail: user.email,
            token: token,
            role: user.role
        };
        req.session.identity = identity
        return done(null, identity)
    }


}