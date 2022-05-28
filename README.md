# IS27-Comp-backend
** Josh Rintoul **
## Introduction
This is the backend for the coding assessment for the IS 27 competition.
Frontend Repo: https://github.com/joshrint/IS27-Comp-frontend
Frontend URL:https://black-sand-01264c71e.1.azurestaticapps.net/
Backend repo: https://github.com/joshrint/IS27-Comp-backend
Backend URL: https://is27-comp-backend.azurewebsites.net/

The backend is developed as an Express application.

## Routes
 Currently the data is presented as a hard coded list but if moved to a production it will be moved to a database for ease of use.
** Guides ** A list of the 12 guides to be called by ID in other locations in the application.
ID: Int
firstName: String
lastName: String

** Boats ** A list of the 8 boats.
ID: Int
guideID: Int
boatName: String
swimlaneID: Int

** Swimlanes ** A list of the 4 potential status' the boats could have. Docked, Outbound to Sea, Inbound to Harbor, Maintenance
ID: Int
name: String