/// imports
const db = require('./helpers');

const server = express();
const express = require('express');





server.use(express.json());''

// Get
server.get('/games', (req, res) => {

    db.retrieve()


    .then(response => {


        
        res.status(200).json(response);
    })

    
    
    .catch(err => {
    
    
    
        res.status(500).json({message: 'Please Retry'});
    
    })
});

// Post

server.post('/games/add', (req, res) => {
    db.add(req.body)

    .then(response => {




        res.status(201).json({msg: `${req.body} New Game`})

    })

    .catch(err => {


        
        res.status(500).json({error: 'Error Not Work'});
        
    })
});

module.exports = server;