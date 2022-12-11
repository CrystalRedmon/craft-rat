// const { RestoreFromTrashOutlined } = require('@mui/icons-material');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('REQ.USER', req.user);

 const sqlTxt = `SELECT *
                FROM supplies
                WHERE "name" % $1
                AND "user_id" = $2;`;

const sqlParams = [
    req.query,
    req.user.id
]

    pool.query(sqlTxt, sqlParams)
    .then(dbRes=>{
        res.send(dbRes.rows);
        console.log(dbRes.rows);    
    })
    .catch(error=>{
        res.sendStatus(500);
        console.log('Search Failed error: ', error);
    })





});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;