import { UserInterface } from '../models/users.model';
declare class createNewUser {
    execute(name: string, email: string, password: string): Promise<UserInterface>;
}
export default createNewUser;
