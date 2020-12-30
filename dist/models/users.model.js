"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const schema = new database_1.default.Schema({
    name: 'string',
    email: {
        type: 'string',
        unique: true,
    },
    password: 'string',
}, {
    timestamps: true,
});
exports.default = database_1.default.model('User', schema);
//# sourceMappingURL=users.model.js.map