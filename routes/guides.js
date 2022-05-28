var express = require("express");
var router = express.Router();
let guidesList = [
    {
        id: 1,
        firstName: 'Bob',
        lastName: 'Drake'
    },
    {
        id: 2,
        firstName: 'Marie',
        lastName: 'Bromfield'
    },
    {
        id: 3,
        firstName: 'Clint',
        lastName: 'Barton'
    },
    {
        id: 4,
        firstName: 'Hal',
        lastName: 'Jordan'
    },
    {
        id: 5,
        firstName: 'Oliver',
        lastName: 'Queen'
    },
    {
        id: 6,
        firstName: 'Barbara',
        lastName: 'Gordon'
    },
    {
        id: 7,
        firstName: 'Billy',
        lastName: 'Batson'
    },
    ,
    {
        id: 8,
        firstName: 'Diana',
        lastName: 'Prince'
    },
    {
        id: 9,
        firstName: 'Connor',
        lastName: 'Hawk'
    },
    {
        id: 10,
        firstName: 'Marc',
        lastName: 'Spector'
    }
    ,
    {
        id: 11,
        firstName: 'Reed',
        lastName: 'Richards'
    },
    {
        id: 12,
        firstName: 'Ben',
        lastName: 'Grimm'
    }

];
router.get("/", function(req, res, next) {
    res.send(guidesList);
});

module.exports = router;