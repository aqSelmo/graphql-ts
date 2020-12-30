"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const schemas_1 = __importDefault(require("./schemas"));
const resolvers_1 = __importDefault(require("./schemas/resolvers"));
class Application {
    constructor() {
        this.application = express_1.default();
        this.middlewares();
        this.application.listen(3000);
    }
    middlewares() {
        this.application.use('/graphql', express_graphql_1.graphqlHTTP({
            schema: schemas_1.default,
            rootValue: resolvers_1.default,
            customFormatErrorFn: error => ({
                message: error.message,
                locations: error.locations,
                path: error.path,
            }),
        }));
    }
}
exports.default = new Application();
//# sourceMappingURL=server.js.map