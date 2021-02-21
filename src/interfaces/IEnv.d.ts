export interface Env {
    // Config TYPEORM
    TYPEORM_CONNECTION: 'mysql' | 'postgres' | 'sqlite' | 'better' | 'cordova' | 'react' | 'nativescript' | 'mssql' | 'mongodb' | 'sql.js' | 'exp',
    TYPEORM_HOST: string,
    TYPEORM_USERNAME: string,
    TYPEORM_PASSWORD: string
    TYPEORM_DATABASE: string
    TYPEORM_PORT: numbe
    TYPEORM_SYNCHRONIZE: boolean
    TYPEORM_LOGGING: boolean
    TYPEORM_ENTITIES: string
    TYPEORM_MIGRATIONS: string
    TYPEORM_MIGRATIONS_DIR: string

    // Config SERVER
    HOST: string
    PORT: number

    // Config JWT
    JWT_TOKEN: string

    // Config MULTER
    STORAGE_TYPE: 'local',
    BUCKET_NAME: string,
    // Other
    [key: string]: string | undefined
}
