var express = require("express");
var router = express.Router();

let swimlanes = [
    {
        id: 0,
        name: 'Docked'
    },
    {
        id: 1,
        name: 'Outbound to Sea'
    },
    {
        id: 2,
        name: 'Inbound to Harbor'
    },
    {
        id: 3,
        name: 'Maintenance'
    }
]

router.get("/", function(req, res, next) {
    res.send(swimlanes);
});

module.exports = router;