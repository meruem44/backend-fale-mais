import express, { json } from 'express'
import cors from 'cors';

class App {
    public server: express.Application

    constructor() {
        this.server = express();

        this.middlewares();
    }

    private middlewares(): void {
        this.server.use(json());
        this.server.use(cors());
    };
};

export default new App().server