import express from 'express';
import 'express-async-errors';
import routers from '@routers/index';
import errorHandler from './app/errors/handler';
import cors from 'cors';
import '@database/connect';
import { Env } from '@interfaces/IEnv';

const { HOST, PORT } = process.env as Env;

const app = express()

app.use(cors({
    exposedHeaders:['*']
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/v1', routers);
app.use(errorHandler);

app.listen(PORT, () => console.log('api', `server ${HOST}:${PORT}`));