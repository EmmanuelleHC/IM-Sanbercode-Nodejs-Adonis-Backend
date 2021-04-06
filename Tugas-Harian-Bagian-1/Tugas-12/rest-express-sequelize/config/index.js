const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI


// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('db_venue', 'root', null, {
  host: 'localhost',
  dialect:'mysql'
});