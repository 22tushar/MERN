# MERN

Endpoints
1. Get All Tasks
Endpoint
URL: /tasks/getalltask
Method: GET
Description
Retrieve a list of all tasks.

Response
Status Code: 200 OK


2. Get a Specific Task
Endpoint
URL: /tasks/:taskId
Method: GET
Description
Retrieve a specific task by its ID.

Request Parameters
taskId: The unique ID of the task.
Response
Status Code: 200 OK

3. Create a New Task
Endpoint
URL: /tasks/newtask
Method: POST
Description
Create a new task.

4. Update an Existing Task
Endpoint
URL: /tasks/:taskId
Method: PUT
Description
Update an existing task by its ID.

Request Parameters
taskId: The unique ID of the task.



5. Delete a Task
Endpoint
URL: /tasks/:taskId
Method: DELETE
Description
Delete a task by its ID.

Request Parameters
taskId: The unique ID of the task.
Response
Status Code: 200 OK

Task Management API Unit Tests 

This document outlines the unit tests for the Task Management API. These tests validate the functionality of each API endpoint.

Testing Framework
Mocha: A flexible JavaScript test framework for Node.js and browsers.
Chai: A BDD / TDD assertion library for Node.js and browsers.
Running the Tests
To run the unit tests, execute the following command:
npm test

All unit tests have passed successfully, confirming the correct functionality of the Task Management API.
