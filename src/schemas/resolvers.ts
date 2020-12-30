import { Query } from 'mongoose';
import User, { UserInterface } from '../models/users.model';

import createUser from '../services/createUser.users';

const resolvers = {
    user({
        id,
    }: Pick<UserInterface, 'id'>): Query<UserInterface | null, UserInterface> {
        return User.findById(id);
    },
    users(): Query<UserInterface[] | null, UserInterface> {
        return User.find();
    },
    createUser({
        name,
        email,
        password,
    }: UserInterface): Promise<UserInterface> {
        const createNewUser = new createUser();

        return createNewUser.execute(name, email, password);
    },
};

export default resolvers;
