const route2 = require('express').Router();

let db = require('../db/db.json');
const fs = require('fs');

route2.get("/api/notes",function(req,res){
    db = JSON.parse(fs.readFileSync('/db/db.json')) || [];
    console.log("GET route",db)
    res.json(db)
});

route2.post("/api/notes",function(req,res){
    const newNoteData = {
        id: Math.floor(Math.random() * 4563), 
        title: req.body.title,
        text: req.bocy.text
    }
    db.push(newNoteData)
    fs.writeFileSync('/db/db.json', JSON.stringify(db), function(error){
        if (error) throw error
    });
    console.log("POST route",db)
    res.json(db)
});

route2.post("/api/notes/:id",function(req,res){
    const updateNote = db.filter(note => note.id != req.params.id)
    db = updateNote;
    fs.writeFileSync('/db/db.json', JSON.stringify(db), function(error){
        if (error) throw error
    });
    console.log("apiRoute",db)
    res.json(db)
});
module.exports = route2;