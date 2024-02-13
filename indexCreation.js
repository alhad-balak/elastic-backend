const { Client } = require('@elastic/elasticsearch');
const esClient = new Client({
    node: 'https://1fc73a2cfdce4074afc03807c13f81fb.us-central1.gcp.cloud.es.io:443',
    auth: {
        apiKey: 'dUpMRG9vMEI5ZUJ2M0VXODJKZEM6Y0MzTURSckRURktRMWI0UTBwRFNtUQ=='
    }
});

const { migrateDataElastic } = require('./migrationData')

// Function to create Elasticsearch index with mappings
async function createIndex(IndexName) {
    try {
        const isExist = await esClient.indices.exists({
            index: IndexName
        });
        if (!isExist) {
            await esClient.indices.create({
                index: IndexName,
                body: {
                    mappings: {
                        properties: {
                            project_type: { type: 'text' },
                            distance: { type: 'float' },
                            id: { type: 'integer' },
                            project_name: { type: 'text' },
                            status: { type: 'keyword' },
                            delivery_date: { type: 'date' },
                            total_units: { type: 'integer' },
                            cover_image: { type: 'text' },
                            address: { type: 'text' }
                        }
                    }
                }
            });
            console.log('Index created successfully');
            migrateDataElastic(IndexName);
        }
        else
            console.log('Index already exist');



    } catch (error) {
        console.error('Error creating index:', error);
    }
}

module.exports = { createIndex };