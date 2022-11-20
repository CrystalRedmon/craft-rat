const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');
  const encryptLib = require('../modules/encryption');
  
  const express = require('express');
  const pool = require('../modules/pool');
  const router = express.Router();


  router.get('/', (req, res) => {
    console.log('About to filter GGGGRRRRR', req.query);
  
    // 🛑 MAY REQUIRE AN IF STATEMENT IF ALL FILTER CATEGORIES ARE NOT CHOSEN
    // EXAMPLE- IF USER ONLY WANTS TO FILTER BY CATEGORY NO MATTER THE COLOR
                  // ⬇️ REMOVED TO TEST CATEGORY ALONE FIRST
                  // AND "color" = $2
                  // 
  
    const sqlTxt = `SELECT * FROM "supplies"
                  WHERE "categories_id" = $1 
                  AND "scraps" = $2
                  AND "color" = $3
                  AND "user_id" = $4;`;
  
    const sqlParams = [
      req.query.categories_id,
      req.query.scraps,
      req.query.color,
      req.user.id
    ];
  
    pool.query(sqlTxt, sqlParams)
      .then(dbRes => {
        res.send(dbRes.rows);
        console.log('Filter results: ', dbRes.rows);
      })
      .catch(error => {
        res.sendStatus(500);
        console.log('Filter results failed: ', error);
      })
  
  })



  module.exports = router;