import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { Request , Response } from 'express'
import BaseContext from '../BaseContext'
import { IContextContainer } from 'server/container'
import passportLocal from 'passport-local';

export default class JwtStrategy extends BaseContext {

private strategyUser: passportLocal.Strategy;
private request : Request;

get strategy() {
    return this.strategyUser;
}

constructor(opts: IContextContainer) {
    
        super(opts);
        console.log('jwt: initialization JWT strategy');
        
        this.verifyRequest = this.verifyRequest.bind(this);
        this.getJwtFromRequest = this.getJwtFromRequest.bind(this);

        this.strategyUser = new Strategy({
            jwtFromRequest: this.getJwtFromRequest,
            secretOrKey   : this.di.config.jwtToken,
        }, this.verifyRequest);
    }

public async verifyRequest(jwtPayload: any, done: VerifiedCallback) {
}

public getJwtFromRequest(req: Request) {
        this.request = req;
        const getToken = ExtractJwt.fromAuthHeaderAsBearerToken();
        return  getToken(req) || req.cookies['token'] || null;
    }
}