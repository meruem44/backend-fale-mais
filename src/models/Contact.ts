import { Schema, Document, model } from 'mongoose';

export interface IContact extends Document {
    name: String;
    address: String;
    address2: String;
    province: String;
    email: String;
    city: String;
};

const ContactSchema = new Schema({
    name: String,
    address: String,
    address2: String,
    province: String,
    email: String,
    city: String
});

export default model<IContact>('Contact', ContactSchema);