import { Sequelize } from "sequelize";
import connection from '../config/db.js';

const Restaurant = connection.define(
    'restaurant',
    {   
        idRestaurant: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey:true
        }, 
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false,
            
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
           
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false

        }
    }
);

export default Restaurant;

