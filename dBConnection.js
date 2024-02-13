const mysql = require('mysql');

const sqlConnection = mysql.createConnection({
    host: 'database-1.ckglolgiv3vl.ap-south-1.rds.amazonaws.com',
    user: 'test_candidates',
    password: 'mnbvfdE#$%^YUjki876%RDfv',
    database: 'real_estate_project'
});

module.exports = { sqlConnection };
