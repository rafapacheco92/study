import Sequelize from 'sequelize';

const Connection = new Sequelize(
    'liquid',
    'user',
    '123456',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

export default Connection