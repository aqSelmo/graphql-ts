import mongoose from '../database';
import { Document } from 'mongoose';
export interface UserInterface extends Document {
    id?: string;
    name: string;
    email: string;
    password: string;
}
declare const _default: mongoose.Model<UserInterface>;
export default _default;
