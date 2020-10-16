import express, { json } from 'express'
import cors from 'cors';
import mongoose from 'mongoose';

import routes from './routes';

class App {
    public server: express.Application

    constructor() {
        this.server = express();

        this.middlewares();
        this.database();
        this.routes();
    }

    private middlewares(): void {
        this.server.use(json());
        this.server.use(cors());
    };

    private database(): void {
        mongoose.connect('mongodb+srv://leandro:leandro@cluster0.ipcwz.mongodb.net/Contacts?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    };

    private routes(): void {
        this.server.use(routes);
    };
};

export default new App().server