"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_model_1 = __importDefault(require("../models/users.model"));
const createUser_users_1 = __importDefault(require("../services/createUser.users"));
const resolvers = {
    user({ id, }) {
        return users_model_1.default.findById(id);
    },
    users() {
        return users_model_1.default.find();
    },
    createUser({ name, email, password, }) {
        const createNewUser = new createUser_users_1.default();
        return createNewUser.execute(name, email, password);
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map