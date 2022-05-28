var express = require("express");
var router = express.Router();

let boats = [
    {
        id: 0,
        guideID: 0,
        boatName: 'Boaty McBoatface',
        swimlaneID: 0
    },
    {
        id: 1,
        guideID: 0,
        boatName: 'Orca II',
        swimlaneID: 0
    },
    {
        id: 2,
        guideID: 0,
        boatName: 'Gone Fission',
        swimlaneID: 0
    },
    {
        id: 3,
        guideID: 0,
        boatName: 'SS Minnow',
        swimlaneID: 1
    },
    {
        id: 4,
        guideID: 0,
        boatName: 'Flying Dutchman',
        swimlaneID: 3
    },
    {
        id: 5,
        guideID: 0,
        boatName: 'Going Merry',
        swimlaneID: 2
    },
    {
        id: 6,
        guideID: 0,
        boatName: 'Black Pearl',
        swimlaneID: 1
    },
    {
        id: 7,
        guideID: 0,
        boatName: 'Nautilus',
        swimlaneID: 1
    },
        
]

router.get("/", function(req, res, next) {
    res.send(boats);
});

module.exports = router;