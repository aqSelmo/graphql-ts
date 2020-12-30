"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb+srv://graphql-cluster.kd3rq.mongodb.net/graphql-cluster', {
    user: 'aqselmo',
    pass: 'PC1112131415',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
exports.default = mongoose_1.default;
//# sourceMappingURL=index.js.map