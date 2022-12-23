const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');
  const encryptLib = require('../modules/encryption');
  
  const express = require('express');
  const pool = require('../modules/pool');
  const router = express.Router();



router.get('/', rejectUnauthenticated, (req, res)=>{
  
  const sqlTxt = `SELECT * FROM "categories";`;

  pool.query(sqlTxt)
  .then(dbRes=>{
    res.send(dbRes.rows);
  })
  .catch(error=>{
    res.sendStatus(500);
  })
})

router.get('/:id', rejectUnauthenticated, (req, res) => {

    const sqlTxt = `SELECT DISTINCT "categories"."name" 
                    FROM "categories" 
                    JOIN "supplies"
                    ON "supplies".categories_id = "categories".id
                    WHERE "supplies".id = $1;`;
   
    pool.query(sqlTxt, [req.params.id])
    .then(dbRes=>{
        res.send(dbRes.rows[0].name);
    })
    .catch(error=>{
        res.sendStatus(500);
    })
  });
  
  /**
   * POST route template
   */
  router.post('/', (req, res) => {
    // POST route code here
  });
  
  module.exports = router;