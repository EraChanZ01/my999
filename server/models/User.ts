import mongoose from 'mongoose';
import { prop, modelOptions, getModelForClass, DocumentType, Ref , pre } from '@typegoose/typegoose';



@modelOptions({ schemaOptions: { collection: 'users' } })
export class User {
    @prop({type: String})
    public email: string;  

    @prop({type: String})
    public firstName: string;

    @prop({type: String})
    public lastName: string;

    @prop({type: String})
    public role: string;

    @prop({type: String})
    public password: string;
    
    @prop({type: String})
    public image: string;

    @prop({type: Number})
    public balance: number;

    @prop({ type: Date , default:() => Date.now()})
    createdAt: Date;

    @prop({ type: Date , default:() => Date.now()})
    updatedAt: Date;
}

export type UserType = mongoose.Model<DocumentType<User>, {}> & User;
export default getModelForClass(User);