# IS27-Comp-backend
** Josh Rintoul **
## Introduction
This is the backend for the coding assessment for the IS 27 competition.
Frontend Repo: https://github.com/joshrint/IS27-Comp-frontend
Frontend URL:https://black-sand-01264c71e.1.azurestaticapps.net/
Backend repo: https://github.com/joshrint/IS27-Comp-backend
Backend URL: https://is27-comp-backend.azurewebsites.net/

The backend is developed as an Express application. It also functions as where the data is stored. Further development would move that data to an SQL or MongoDB. If the application was developed on AWS A dynamoDB would also function well for this application.

The Github action Tests, packages, and deploys the application to an Azure Web Application Service.

## Routes
 Currently the data is presented as a hard coded list but if moved to a production it will be moved to a database for ease of use.

** Guides ** A list of the 12 guides to be called by ID in other locations in the application.
ID: Int
guideName: String

** Boats ** A list of the 8 boats.
ID: Int
guideName: String
boatName: String
swimlaneID: Int

## Endpoints
** boatsApi **
The boats hold the main endpoints for the application.
GET: A generic get all of the boats for the main homepage to load.
PUT: Update the swimlaneID for the boat.
POST: Create a new boat to add and push it to the end of the boats array.
DELETE: Delete a boat from the boats array.

** guidesAPI **
The guides API would be expanded later on in development. Currently the only endpoint is GET all the guides for the new boat form in the frontend.
There is no page to add or remove a guide from the application. If there would be one I would also want to develop a method to scrub the boat list of that particular guide that was removed.