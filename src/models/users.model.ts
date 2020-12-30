import mongoose from '../database';
import { Document } from 'mongoose';

export interface UserInterface extends Document {
    id?: string;
    name: string;
    email: string;
    password: string;
}

const schema = new mongoose.Schema(
    {
        name: 'string',
        email: {
            type: 'string',
            unique: true,
        },
        password: 'string',
    },
    {
        timestamps: true,
    },
);

export default mongoose.model<UserInterface>('User', schema);
