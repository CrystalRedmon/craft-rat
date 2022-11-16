const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');
  const encryptLib = require('../modules/encryption');
  
  const express = require('express');
  const pool = require('../modules/pool');
  const router = express.Router();


router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('Inside categories router ', req.params.id)

    const sqlTxt = `SELECT DISTINCT "categories"."name" 
                    FROM "categories" 
                    JOIN "supplies"
                    ON "supplies".categories_id = "categories".id
                    WHERE "categories".id = $1;`;
   
    pool.query(sqlTxt, [req.params.id])
    .then(dbRes=>{
        console.log('Current category from DB: ', dbRes.rows[0].name);
        res.send(dbRes.rows[0].name);
    })
    .catch(error=>{
        console.log('Get current category from DB failed: ', error);
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