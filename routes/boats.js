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
        guideName: 'Barbara Gordon',
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

//Get All boats for main page
router.get("/", (req, res, next) => {
    res.send(boats);
});

//Get 1 boat
router.get("/:id", (req, res, next) => {
    const boat = boats.filter(b => b.id === parseInt(req.params.id));
    res.send(boat);
});

//Create Boat
router.post('/' , (req, res) => {
    res.send("New Boat POST");

});
//Update Boat
router.put('/:id', (req, res) =>{
    //console.log(req.body)
    let tempboat = [];
    //boat.swimlaneID = req.body.swimlaneID;
    boats.forEach(boat => {
        if(boat.id === req.body.id){
            boat.swimlaneID = req.body.swimlaneID;
            tempboat = boat;
        }
    });


    res.send(tempboat);
})

module.exports = router;