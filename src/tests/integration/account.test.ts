import request from 'supertest';
import { Env } from '@interfaces/IEnv';
import '@database/connect';
import Account, { TypeAccountRole } from '@models/Account';
import People from '@models/People';

require('dotenv').config()

describe('account related tests', () => {
    const { HOST, PORT } = process.env as Env;
    const baseUrl = `${HOST}:${PORT}`;
    it('create savings account ', async () => {
        const response = await request(baseUrl).post('/api/v1/account/create')
            .send({
                "name": "test",
                "cpf": "07495613513",
                "dateBirthday": "2000-02-01",
                "idPeople": 1,
                "balance": 10,
                "typeAccount": "P"
            })
        expect(response.status).toBe(201)
    })

    it('create current account ', async () => {

        People.create({
            name: "test",
            cpf: "07495613513",
            dateBirthday: "2000-02-01",
        })

        Account.create({
            peopleId: 1,
            balance: 10,
            typeAccount: TypeAccountRole.C
        })

        const response = await request(baseUrl).post('/api/v1/account/create')
            .send({
                "name": "test",
                "cpf": "07495613513",
                "dateBirthday": "2000-02-01",
                "balance": 10,
                "typeAccount": "P"
            })
        expect(response.status).toBe(201)
    })

    it('create invalid current account ', async () => {
        const response = await request(baseUrl).post('/api/v1/account/create')
            .send({
                "name": "test",
                "cpf": "07495613513",
                "dateBirthday": "2000-02-01",
                "balance": 10,
                "typeAccount": "D"
            })
        expect(response.status).toBe(400)
    })

    it('deposit ', async () => {
        const response = await request(baseUrl).put('/api/v1/account/deposit')
            .send({
                "accountId": 1,
                "value": 50
            })
        expect(response.status).toBe(200)
    })

    it('Withdraw ', async () => {
        const response = await request(baseUrl).put('/api/v1/account/withdraw')
            .send({
                "accountId": 1,
                "value": 10
            })
        expect(response.status).toBe(200)
    })

    it('Balance ', async () => {
        const response = await request(baseUrl).get('/api/v1/account/balance/1')
        expect(response.status).toBe(200)
    })

    it('Block ', async () => {
        const response = await request(baseUrl).put('/api/v1/account/block').send({
            "accountId": 1
        })

        expect(response.status).toBe(200)
    })

    it('Withdraw with block account', async () => {
        const response = await request(baseUrl).put('/api/v1/account/withdraw')
            .send({
                "accountId": 1,
                "value": 10
            })
        expect(response.status).toBe(401)
    })

    it('ative ', async () => {
        const response = await request(baseUrl).put('/api/v1/account/ative').send({
            "accountId": 1
        })

        expect(response.status).toBe(200)
    })
})