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

  pool.query(sqlText, [req.user.id])
    .then(dbRes => {
      console.log(dbRes.rows)
      res.send(dbRes.rows);
    })
    .catch(error => {
      console.log('Get supplies failed: ', error);
    })

});



router.get('/:id', rejectUnauthenticated, (req, res) => {
  console.log('I made it to the server: ', req.params.id);
  const sqlText = `SELECT * FROM "supplies" 
                  WHERE "user_id" = $1
                  AND "supplies".id = $2;`;

  const sqlParams = [
    req.user.id,
    req.params.id
  ];

  pool.query(sqlText, sqlParams)
  .then(dbRes=>{
    console.log('Here is the current item: ', dbRes.rows);
    res.send(dbRes.rows);
  })
  .catch(error=>{
    console.log('Get current item from DB failed: ', error);
    res.sendStatus(500);
  })


})

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;