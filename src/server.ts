import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import schema from './schemas';
import resolvers from './schemas/resolvers';

import dotenv from 'dotenv';

dotenv.config();

class Application {
    private application;

    constructor() {
        this.application = express();

        this.middlewares();

        this.application.listen(3000);
    }

    private middlewares() {
        this.application.use(
            '/graphql',
            graphqlHTTP({
                schema: schema,
                rootValue: resolvers,
                customFormatErrorFn: error => ({
                    message: error.message,
                    locations: error.locations,
                    path: error.path,
                }),
            }),
        );
    }
}

export default new Application();
