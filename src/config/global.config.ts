import { dotEnvPath } from './path/index';
import { config as dotenv } from 'dotenv'

dotenv({path: dotEnvPath()})

export default {
    databaseConnectionString: `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.oafie.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`
}