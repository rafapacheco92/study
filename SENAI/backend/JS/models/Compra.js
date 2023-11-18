import Sequelize from 'sequelize';
import Connection from '../database.js';
import Empresa from './Empresa.js'
import User from './User.js'


const Compra = Connection.define(
    'compra',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        idEmpresa: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'empresas',
                key: 'id'
            }
        },
        dataCompra: {
            type: Sequelize.DATE,
            allowNull: false
        }
    }
);

Compra.belongsTo(User, { // o user que importamos
    foreignKey: 'idUser'
});

Compra.belongsTo(Empresa, {
    foreignKey: 'idEmpresa'
});

export default Compra;