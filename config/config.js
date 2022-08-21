require('dotenv').config();

module.exports = {
  development: {
    username: 'jqqxgagwpjircu',
    password: 'c378f5ea74bc9a4d8b4161f4b41b7190053545a36d68fa5ebc5508e951c26353',
    database: 'd27uf3js5bjhj6',
    host: 'ec2-44-205-64-253.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    username: 'postgres',
    password: 'Ferdi12345',
    database: 'db_secondhand',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: 'jqqxgagwpjircu',
    password: 'c378f5ea74bc9a4d8b4161f4b41b7190053545a36d68fa5ebc5508e951c26353',
    database: 'd27uf3js5bjhj6',
    host: 'ec2-44-205-64-253.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
