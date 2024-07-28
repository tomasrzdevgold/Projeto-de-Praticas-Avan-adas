 
const Sequelize = require('sequelize');
const database = require('../data_base/db');
 
const Usuario = database.define('cadastro', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Artista: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Genero:  {
        type: Sequelize.STRING,
        allowNull: false
    },
    Album:  {
        type: Sequelize.STRING,
        allowNull: false
    }
    }, {



       timestamps: true, 
        hooks: {
          beforeCreate: (cadastro, options) => {
            const now = new Date();
            const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
            cadastro.createdAt = threeHoursLater;
            cadastro.updatedAt = threeHoursLater;
          },
          beforeUpdate: (cadastro, options) => {
            const now = new Date();
            const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
            cadastro.updatedAt = threeHoursLater;
          }
    }
        
})


 
module.exports = Usuario;