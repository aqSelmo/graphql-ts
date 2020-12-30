import mongoose from 'mongoose';

mongoose.connect(
    'mongodb+srv://graphql-cluster.kd3rq.mongodb.net/graphql-cluster',
    {
        user: 'aqselmo',
        pass: 'PC1112131415',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
);

export default mongoose;
