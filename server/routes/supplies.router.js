const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');

const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // GET route code here
    console.log("I made it to the server");
    
    const sqlText = `SELECT * FROM "supplies";`;
    pool.query(sqlText)
    .then(dbRes=>{
        console.log(dbRes.rows)
        res.send(dbRes.rows); 
    })
    .catch(error=>{
        console.log('Get supplies failed: ', error);
    })
  
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;