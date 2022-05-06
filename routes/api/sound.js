var express = require('express');
var router = express.Router();
var dbConn = require('../../config/db');

//ADD
router.post('/add',(req, res) =>{   
    // get the input from the user trough request (req)
    console.log(req.body);
    var Samples = req.body.Samples;
    var Average = req.body.Average;
    var Hertz = req.body. Hertz;
    var date = req.body. date;
    // connect to mysql database and perform INSERT Query
    sqlQuery = `INSERT INTO sound_tb (Samples, Average, Hertz, date) VALUES ('${Samples}','${Average}','${Hertz}','${date}')`
    dbConn.query(sqlQuery,  function( error, results, fields ){ 
         if (error) throw error;
        res.status(200).json(results); 
        });
    });

// INSERT
// Inserting entry between rows given an ID
router.post('/insert/:id',(req, res) =>{   
    // get the input from the user trough request (req)
    console.log(req.body);
    var SignalID = req.body.SignalID;
    var Samples = req.body.Samples;
    var Average = req.body.Average;
    var Hertz = req.body.Hertz;
    var date = req.body.date;
    // connect to mysql database and perform INSERT Query
    sqlQuery = `INSERT INTO sound_tb (SignalID, Samples, Average, Hertz,date) VALUES ('${SignalID}','${Samples}','${Average}','${Hertz}','${date}')`
    dbConn.query(sqlQuery,  function( error, results, fields ){ 
         if (error) throw error;
        res.status(200).json(results); 
        });
    });

// VIEW
// VIEWING OF ALL RECORDS
// GET /api/sound/view
router.get('/view', (req, res) => {
    dbConn.query('SELECT * FROM sound_tb', function (error, results,fields ) {
            if (error) throw error;
            res.status(200).json(results);  
          });
    
    });

//VIEWING DEPENDING ON ID
// GET /api/sound/view/id
router.get('/view/:id',(req,res)=> {
        dbConn.query('SELECT * FROM sound_tb WHERE SignalID = ?',[req.params.id],(error, results,fields)=>{
            if (error) throw error;
            res.status(200).json(results); 
            
        })
    });

// UPDATE
// PUT /api/sound/update/id
router.put('/update/:id',(req, res) =>{   
    // get the input from the user trough request (req)
    console.log(req.body);
    var Samples = req.body.Samples;
    var Average = req.body.Average;
    var Hertz = req.body. Hertz;
    var date = req.body. date;
    // connect to mysql database and perform update Query
    sqlQuery = `UPDATE sound_tb SET Samples = '${Samples}', Average = '${Average}', Hertz = '${Hertz}', date = '${date}' WHERE SignalID = ?`
    dbConn.query(sqlQuery, [req.params.id],( error, results, fields )=>{ 
         if (error) throw error;
        res.status(200).json(results); 
        });
    });

// DELETE
// DELETE /api/sound/delete/id
router.delete('/delete/:id',(req,res)=> {
    dbConn.query('DELETE FROM sound_tb WHERE SignalID = ?',[req.params.id],(error, results,fields)=>{
        if (error) throw error;
        res.status(200).json(results); 
        
    })
});

module.exports = router;


