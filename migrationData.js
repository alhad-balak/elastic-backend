// Import necessary libraries
const { Client } = require('@elastic/elasticsearch');
const mysql = require('mysql');

// Create Elasticsearch client
const esClient = new Client({
    node: 'https://1fc73a2cfdce4074afc03807c13f81fb.us-central1.gcp.cloud.es.io:443',
    auth: {
        apiKey: 'dUpMRG9vMEI5ZUJ2M0VXODJKZEM6Y0MzTURSckRURktRMWI0UTBwRFNtUQ=='
    }
}); // Change URL as needed

// Create MySQL connection
const sqlConnection = mysql.createConnection({
    host: 'database-1.ckglolgiv3vl.ap-south-1.rds.amazonaws.com',
    user: 'test_candidates',
    password: 'mnbvfdE#$%^YUjki876%RDfv',
    database: 'real_estate_project',
    port: '3306'
});

// Function to migrate data from MySQL to Elasticsearch
async function migrateDataElastic(IndexName) {
    try {
        // Connect to MySQL
        sqlConnection.connect();

        // Execute SQL query to retrieve data
        const sqlQuery = `SELECT JSON_UNQUOTE(JSON_EXTRACT(pt.type_name, '$.en')) AS project_type, ROUND(6371 * acos(cos(radians(22.85857000)) * cos(radians(p.latitude)) * cos(radians(p.longitude) - radians(51.82114000)) + sin(radians(22.85857000)) * sin(radians(p.latitude))), 2) AS distance, p.* FROM projects p JOIN project_types pt ON p.project_type_id = pt.id WHERE JSON_UNQUOTE(JSON_EXTRACT(pt.type_name, '$.en')) IN ('penthouse', 'studio', 'villa', 'apartment', 'land', 'duplex', 'office') AND p.status = 'Complete' AND 6371 * acos(cos(radians(22.85857000)) * cos(radians(p.latitude)) * cos(radians(p.longitude) - radians(51.82114000)) + sin(radians(22.85857000)) * sin(radians(p.latitude))) <= 100 ORDER BY distance ASC;`;
        sqlConnection.query(sqlQuery, async (error, rows, fields) => {
            if (error) {
                console.error('Error executing SQL query:', error);
                return;
            }
            // console.log(rows)
            // console.log("Query Executed");

            // Prepare documents for bulk indexing
            const bulkBody = rows.map(doc => ({
                index: {
                    _index: IndexName,
                    _id: doc.id,
                    project_type: doc.project_type,
                    distance: doc.distance,
                    project_name: JSON.parse(doc.project_name)["en"],
                    status: doc.status,
                    delivery_date: doc.delivery_date,
                    total_units: doc.total_units,
                    cover_image: doc.cover_image,
                    address: JSON.parse(doc.address)["en"]
                }
            }));

            // Perform bulk indexing
            // const { body: bulkResponse } = await esClient.bulk({ refresh: true, body: bulkBody });

            const result = await esClient.helpers.bulk({
                datasource: bulkBody,
                onDocument(doc) {
                    return { index: { _index: IndexName } };
                }
            });

        });
        // Log successful migration
        console.log('Data migration successful');
    } catch (error) {
        console.error('Error migrating data:', error);
    } finally {
        // Close MySQL connection
        sqlConnection.end();
    }
}

// Call function to migrate data
module.exports = { migrateDataElastic }
