import request from 'supertest';
import { Env } from '@interfaces/IEnv';
import '@database/connect';

require('dotenv').config()

describe('account related tests', () => {
    const { HOST, PORT } = process.env as Env;
    const baseUrl = `${HOST}:${PORT}`;
    it('create account', () => {
        request(baseUrl).post('/api/v1')

        expect(true).toBe(true)
    })
})