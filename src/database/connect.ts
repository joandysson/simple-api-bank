import { createConnection } from "typeorm"

createConnection()
    .then(() => console.log('Successfully connected with database'))
    .catch((error) => console.log('Connection database error', error.message))