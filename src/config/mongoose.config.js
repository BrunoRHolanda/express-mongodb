import mongoose from 'mongoose';

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DATABASE
} = process.env;

(async () => {
    await mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`, {
        authSource: "admin",
        user: MONGO_USERNAME,
        pass: MONGO_PASSWORD,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Mongo Db has connected!');
})().catch(err => console.log(err));
