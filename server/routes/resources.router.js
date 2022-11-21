const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');
  const encryptLib = require('../modules/encryption');
  
  const express = require('express');
  const pool = require('../modules/pool');
  const router = express.Router();




  router.get('/', rejectUnauthenticated, (req, res)=>{
    console.log('Getting resouces');
    const sqlTxt = `SELECT * FROM "resources"
    WHERE "user_id" = $1;`;

    pool.query(sqlTxt, [req.user.id])
    .then(dbRes=>{
        res.send(dbRes.rows);
        console.log('All of the resources: ', dbRes);
    })
    .catch(error=>{
        res.sendStatus(500);
        console.log('GET resources failed: ', error);
    })
  });

  module.exports = router;