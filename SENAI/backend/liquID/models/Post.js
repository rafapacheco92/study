import Sequelize from 'sequelize';
import Connection from '../database.js';

const Post = Connection.define(
    'posts',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            // ?
        }
    }
);

export default Post;