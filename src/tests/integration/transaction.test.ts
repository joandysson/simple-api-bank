import request from 'supertest';
import { Env } from '@interfaces/IEnv';
// import '@database/connect';

require('dotenv').config()

describe('transactions', () => {
    const { HOST, PORT } = process.env as Env;
    const baseUrl = `${HOST}:${PORT}`;
    it('history all ', async () => {
        const response = await request(baseUrl).get('/api/v1/transaction/history/1')
        expect(response.status).toBe(200)
    })
})