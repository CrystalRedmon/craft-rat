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
router.get('/', rejectUnauthenticated, (req, res) => {
    // GET route code here
    console.log("I made it to the server", req.user.id);
    
    const sqlText = `SELECT * FROM "supplies" WHERE "user_id" = $1;`;
    
    pool.query(sqlText, [req.user.id] )
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