import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

// Application routes
import main from './routes/main';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extented: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', main);
  }
}

export default new App().app;
