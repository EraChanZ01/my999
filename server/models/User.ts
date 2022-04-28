import mongoose from 'mongoose';
import { prop, modelOptions, getModelForClass, DocumentType, Ref , pre } from '@typegoose/typegoose';
import { ROLE } from 'server/constants';
import bcrypt from 'bcrypt';

@pre<User>('save', function (next) { // or @pre(this: Car, 'save', ...

    //!!! the following lines of the code have to be last in the SAVE callback
    //!!! --------------------------------------------------------------------
    if (!this.isModified('password')) {
        return next();
    }


    bcrypt.hash(this.password, 10, (hashError: Error, encrypted: string) => {
        if (hashError) {
            return next(hashError);
        }

        // replace a password string with hash value
        this.password = encrypted;
        return next();
    });
    //!!! --------------------------------------------------------------------

})

@modelOptions({ schemaOptions: { collection: 'users' } })
export class User {
    @prop({type: String})
    public email: string;  

    @prop({type: String})
    public firstName: string;

    @prop({type: String})
    public lastName: string;

    @prop({type: String})
    public role: ROLE;

    @prop({type: String})
    public password: string;
    
    @prop({type: String})
    public image: string;

    @prop({type: Number})
    public balans: number;

    @prop ({type: Number})
    public lvl: number;

    @prop ({type: String})
    public exp: string;

    @prop({ type: Date , default:() => Date.now()})
    createdAt: Date;

    @prop({ type: Date , default:() => Date.now()})
    updatedAt: Date;
}

export type UserType = mongoose.Model<DocumentType<User>, {}> & User;
export default getModelForClass(User);