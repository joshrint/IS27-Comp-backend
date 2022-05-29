var express = require("express");
var router = express.Router();

let boats = [
    {
        id: 0,
        guideName: 'Bob Drake',
        boatName: 'Boaty McBoatface',
        swimlaneID: 0
    },
    {
        id: 1,
        guideName: 'Marie Bromfield',
        boatName: 'Orca II',
        swimlaneID: 0
    },
    {
        id: 2,
        guide: 0,
        boatName: 'Gone Fission',
        swimlaneID: 0
    },
    {
        id: 3,
        guideName: 'Marc Spector',
        boatName: 'SS Minnow',
        swimlaneID: 1
    },
    {
        id: 4,
        guideName: 'N/A',
        boatName: 'Flying Dutchman',
        swimlaneID: 3
    },
    {
        id: 5,
        guideName: 'Oliver Queen',
        boatName: 'Going Merry',
        swimlaneID: 2
    },
    {
        id: 6,
        guideName: 'Billy Batson',
        boatName: 'Black Pearl',
        swimlaneID: 1
    },
    {
        id: 7,
        guideName: 'Diana Prince',
        boatName: 'Nautilus',
        swimlaneID: 1
    },
        
]

router.get("/", function(req, res, next) {
    res.send(boats);
});

module.exports = router;