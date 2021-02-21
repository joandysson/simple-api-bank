import { Router } from 'express'
import userRouters from './TransactionRouters';

const routers = Router();

routers.get('/', (request, response) => {
    return response.status(200).send('easyMenu api V1.0.0')
});

routers.use('/user', userRouters)

export default routers;