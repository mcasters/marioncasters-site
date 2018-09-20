import Sequelize, { Op } from 'sequelize';
import config from '../config';

const sequelize = new Sequelize(
  config.databaseName,
  config.databaseUsername,
  config.databasePassword,
  {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: Op,
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  },
);

export default sequelize;
