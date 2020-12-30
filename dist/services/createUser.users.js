"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const users_model_1 = __importDefault(require("../models/users.model"));
class createNewUser {
    execute(name, email, password) {
        const hashedPassword = crypto_1.default
            .createHash('md5')
            .update(password)
            .digest('hex');
        const user = new users_model_1.default({
            name,
            email,
            hashedPassword,
        });
        return user.save();
    }
}
exports.default = createNewUser;
//# sourceMappingURL=createUser.users.js.map