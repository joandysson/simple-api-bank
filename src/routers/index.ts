import { Router } from 'express'
import transactionRouters from './TransactionRouters';

const routers = Router();

routers.get('/', (request, response) => {
    return response.status(200).send('Api bank api V1.0.0')
});

routers.use('/transaction', transactionRouters)

export default routers;