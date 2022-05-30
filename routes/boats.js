var express = require("express");
var router = express.Router();

//Starting boat array. 8 Boats in total 
let boats = [
    {
        id: 1,
        guideName: 'Bob Drake',
        boatName: 'Boaty McBoatface',
        swimlaneID: 0
    },
    {
        id: 2,
        guideName: 'Marie Bromfield',
        boatName: 'Orca II',
        swimlaneID: 0
    },
    {
        id: 3,
        guideName: 'Barbara Gordon',
        boatName: 'Gone Fission',
        swimlaneID: 0
    },
    {
        id: 4,
        guideName: 'Marc Spector',
        boatName: 'SS Minnow',
        swimlaneID: 1
    },
    {
        id: 5,
        guideName: 'N/A',
        boatName: 'Flying Dutchman',
        swimlaneID: 3
    },
    {
        id: 6,
        guideName: 'Oliver Queen',
        boatName: 'Going Merry',
        swimlaneID: 2
    },
    {
        id: 7,
        guideName: 'Billy Batson',
        boatName: 'Black Pearl',
        swimlaneID: 1
    },
    {
        id: 8,
        guideName: 'Diana Prince',
        boatName: 'Nautilus',
        swimlaneID: 1
    },
        
]

//Get All boats for main page
router.get("/", (req, res, next) => {
    res.send(boats);
});

//Create a new Boat
router.post('/' , (req, res) => {
    //Get the name and guide name
    //set ID to 1+ the last ID
    //Set swimlaneID to 0
    let guideName = req.body.guideName;
    let boatName = req.body.boatName;
    let newID = parseInt((boats[boats.length -1].id)+1)
    let newBoat = {id: newID, boatName: boatName, guideName:guideName, swimlaneID: 0}
    boats.push(newBoat);
    res.send(newBoat);

});
//Update Boat
router.put('/:id', (req, res) =>{
    let tempboat = [];
    //Loop over the boats until you find the one to update and change the swimlaneID
    boats.forEach(boat => {
        if(boat.id === req.body.id){
            boat.swimlaneID = req.body.swimlaneID;
            tempboat = boat;
        }
    });
    res.send(tempboat);
})
// Delete Target boat
router.delete('/:id', (req, res) =>{
    //Loop throug the boat array until you find the matching ID
    for (let i = 0; i < boats.length; i ++){
        if(parseInt(boats[i].id) === parseInt(req.params.id)){
            //Splice from the Array
            boats.splice(i, 1);
        }
    }
    //Send the deleted boat id
    res.send("Deleted Boat " + req.params.id);
})

module.exports = router;