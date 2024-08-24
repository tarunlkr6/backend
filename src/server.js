import dotenv from 'dotenv';
import connectDB from './db/config.js';
import { app } from './app.js';

dotenv.config({ path: './.env' });
const port = process.env.PORT || 8000;

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server listening at PORT ${port}`);
        })
    })
    .catch((err) => {
        console.log("mongoDB connection Failed ", err);
    })