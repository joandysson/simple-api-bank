import { Router } from 'express'
import accountRouters from './AccountRouters';
import transactionRouters from './TransactionRouters';

const routers = Router();

routers.get('/', (request, response) => {
    return response.status(200).send('Api bank api V1.0.0')
});

routers.use('/transaction', transactionRouters)
routers.use('/account', accountRouters)

export default routers;