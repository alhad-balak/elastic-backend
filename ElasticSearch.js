// Import necessary libraries
const { Client } = require('@elastic/elasticsearch');
const mysql = require('mysql');
// Create Elasticsearch client
const esClient = new Client({ node: 'http://localhost:9200' }); // Change URL as needed

const { createIndex } = require('./indexCreation')
const { migrateData } = require('./Migration')


// Call functions to create index and migrate data
createIndex();
migrateData();
