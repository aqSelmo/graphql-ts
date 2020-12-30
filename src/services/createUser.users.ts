import crypto from 'crypto';
import User from '../models/users.model';

import { UserInterface } from '../models/users.model';

class createNewUser {
    execute(
        name: string,
        email: string,
        password: string,
    ): Promise<UserInterface> {
        const hashedPassword = crypto
            .createHash('md5')
            .update(password)
            .digest('hex');

        const user = new User({
            name,
            email,
            hashedPassword,
        });

        return user.save();
    }
}

export default createNewUser;
