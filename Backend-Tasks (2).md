
# Real Estate Project Query Task

### Mysql Credentials: 
Host: `database-1.ckglolgiv3vl.ap-south-1.rds.amazonaws.com` 

Port: `3306`

Username: `test_candidates`

Password: `mnbvfdE#$%^YUjki876%RDfv`

database name: `real_estate_project`

`You may use any Nodejs framework of your choice.
`
## Objective #1
Write a SQL query to retrieve information about various types of real estate projects that are within a 100-kilometer radius of a specified geographical location. The query should focus on projects that are marked as 'Complete' and belong to specific project types like 'penthouse', 'studio', 'villa', 'apartment', 'land', 'duplex', and 'office'.

### Requirements
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

4. **Output**:
   - The query should output the project type (in English), the calculated distance, and all columns from the `projects` table.
   - Order the results by the calculated distance in ascending order.
   - Prepare a documentation with the query used and also attach the result(via screenshot or csv file).
   - Make sure to mention the total count of the result in the documentation

This task will assess your ability to work with complex SQL queries involving joins, JSON data extraction, geographical calculations, and specific data filtering criteria.




## Objective #2
Write a script to migrate the result set from the last SQL query to an Elasticsearch index and then develop a simple Node.js API to fetch the data from Elasticsearch.

### Requirements
1. **Data Source**: Use the result set from the last SQL query in the migration script.
2. **Elasticsearch Index**:
   - You can use an existing Elasticsearch node, install Elasticsearch locally, or use any cloud service of your choice.
   - Create an index in Elasticsearch and define the mappings for the relevant fields.
3. **Data Fields**:
   - Migrate the following columns to Elasticsearch: `project_type` (string), `distance`, `id`, `project_name` (in English), `status`, `delivery_date`, `total_units`, `cover_image`, and `address` (in English).
4. **Node.js API**:
   - Develop a RESTful API using Node.js to interact with the Elasticsearch index.
5. **API Endpoint**:
   - Implement an endpoint to fetch all documents from the Elasticsearch index.
   - The endpoint should handle basic querying and filtering capabilities.

### Implementation Details
- Structure your code with proper error handling and response formatting.
- Include any necessary configuration for connecting to the Elasticsearch instance.
- Document the API endpoints with clear instructions on how to use them.
- Write a script to migrate the data from the SQL query result to the Elasticsearch index.

## Submission
- Provide the source code for the data migration script and the Node.js API.
- Include a README file with:
  - Instructions on how to set up and run the migration.
  - Details on how to set up the API, including any environment setup and configuration.
  - Usage instructions for the API endpoint(s).

## Evaluation Criteria
- Accuracy and efficiency of the data migration process.
- Code quality, organization, and readability in the overall implementation.
- Effective use of Mysql, Elasticsearch features and Node.js best practices.

This task assesses your ability to handle data migration to Elasticsearch and develop a functional API in Node.js for querying and retrieving data.


`You may or may not be familiar with the concepts used in these tasks but the important aspect that will be evaluated is your ability to use all the tools(Google, ChatGPT, Bard, Stackoverflow or even Reddit :p) at your displosal to get the task done within the shortest time span possible. So try not to give up, the farther you go with the test, the better it is for both of us!` 

