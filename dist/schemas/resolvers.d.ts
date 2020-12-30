import { Query } from 'mongoose';
import { UserInterface } from '../models/users.model';
declare const resolvers: {
    user({ id, }: Pick<UserInterface, 'id'>): Query<UserInterface | null, UserInterface>;
    users(): Query<UserInterface[] | null, UserInterface>;
    createUser({ name, email, password, }: UserInterface): Promise<UserInterface>;
};
export default resolvers;
