## Real Estate Project

Deployed Link- https://elastic-backend.onrender.com/
<br/>
End point of API- ```/api/documents```
## Objective
Migrated the result set to an Elasticsearch index by writing a SQL query to retrieve information about various types of real estate projects that are within a 100-kilometer radius of a specified geographical location. The query should focus on projects that are marked as 'Complete' and belong to specific project types like 'penthouse', 'studio', 'villa', 'apartment', 'land', 'duplex', and 'office' with following functionalities. 

### Features
1. **Database Tables**:
   - Work with two tables: `projects` and `project_types`.
   - The `projects` table contains details about various real estate projects.
   - The `project_types` table holds information about the types of projects. `type_name` column has both `en - for English` and `ar - for Arabic` in json format.

2. **Geographical Coordinates**:
   - Use the latitude `22.85857000` and longitude `51.82114000` as the center point for your search.

3. **Query Components**:
   - **Project Type Filter**: Filter the results to include only the projects that are of type `'penthouse', 'studio', 'villa', 'apartment', 'land', 'duplex', or 'office'`.
   - **Geographical Radius Filter**: Only include projects that are within a 100-kilometer radius of the shared coordinates.
   - **Project Status Filter**: Ensure that only projects with the status 'Complete' are included in the results.
   - **Distance Calculation**: Calculate the distance of each project from the specified coordinates and include it in the output.

4. **Data Source**: Use the result set from the last SQL query in the migration script.
5. **Elasticsearch Index**:
   - You can use an existing Elasticsearch node, install Elasticsearch locally, or use any cloud service of your choice.
   - Create an index in Elasticsearch and define the mappings for the relevant fields.
6. **Data Fields**:
   - Migrate the following columns to Elasticsearch: `project_type` (string), `distance`, `id`, `project_name` (in English), `status`, `delivery_date`, `total_units`, `cover_image`, and `address` (in English).
7. **Node.js API**:
   - Develop a RESTful API using Node.js to interact with the Elasticsearch index.
8. **API Endpoint**:
   - Implement an endpoint to fetch all documents from the Elasticsearch index.
   - The endpoint should handle basic querying and filtering capabilities.
