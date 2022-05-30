var express = require("express");
var router = express.Router();

// Seeded guides list.
let guidesList = [
    {
        id: 0,
        guideName: 'N/A'
    },
    {
        id: 1,
        guideName: 'Bob (and Wilfred)'
    },
    {
        id: 2,
        guideName: 'Marie Bromfield'
    },
    {
        id: 3,
        guideName: 'Clint Barton'
    },
    {
        id: 4,
        guideName: 'Hal Jordan'
    },
    {
        id: 5,
        guideName: 'Oliver Queen'
    },
    {
        id: 6,
        guideName: 'Barbara Gordon'
    },
    {
        id: 7,
        guideName: 'Billy Batson'
    },
    {
        id: 8,
        guideName: 'Diana Prince'
    },
    {
        id: 9,
        guideName: 'Connor Hawk'
    },
    {
        id: 10,
        guideName: 'Marc Spector'
    }
    ,
    {
        id: 11,
        guideName: 'Reed Richards'
    },
    {
        id: 12,
        guideName: 'Ben Grimm'
    }
];
// GET endpoint for the guides
router.get("/", function(req, res, next) {
    res.send(guidesList);
});

module.exports = router;