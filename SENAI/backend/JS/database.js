import Sequelize from "sequelize"

const Connection = new Sequelize(
    'backend',
    'user',
    '12345',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

export default Connection