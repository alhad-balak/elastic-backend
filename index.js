const express = require('express');
const { Client } = require('@elastic/elasticsearch');

const app = express();
const esClient = new Client({
    node: 'https://1fc73a2cfdce4074afc03807c13f81fb.us-central1.gcp.cloud.es.io:443',
    auth: {
        apiKey: 'dUpMRG9vMEI5ZUJ2M0VXODJKZEM6Y0MzTURSckRURktRMWI0UTBwRFNtUQ=='
    }
});// Change URL as needed

const { createIndex } = require('./indexCreation');

var IndexName = "searchindex";
createIndex(IndexName);


// API endpoint to fetch all documents from Elasticsearch index
app.get('/api/documents', async (req, res) => {
    try {
        // IndexName = req.params.name;

        const body = await esClient.search({
            index: IndexName,
            body: {
                query: {
                    match_all: {} // Retrieve all documents
                }
            }
        });

        res.status(200).json(body.hits.hits.map(hit => hit._source));
    } catch (error) {
        console.error('Error fetching documents:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});