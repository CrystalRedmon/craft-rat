const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');

const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();




router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('Getting resouces');
  const sqlTxt = `SELECT * FROM "resources"
    WHERE "user_id" = $1;`;

  pool.query(sqlTxt, [req.user.id])
    .then(dbRes => {
      res.send(dbRes.rows);
      console.log('All of the resources: ', dbRes.rows);
    })
    .catch(error => {
      res.sendStatus(500);
      console.log('GET resources failed: ', error);
    })
});


router.delete('/:id', (req, res) => {
  console.log('Delete resource for user #: ', req.params.id, req.user.id);
  const sqlTxt = `DELETE FROM "resources"
                  WHERE "id" = $1
                  AND "user_id" =$2;`;
  const sqlParams = [
    req.params.id,
    req.user.id
  ];

  pool.query(sqlTxt, sqlParams)
    .then(dbRes => {
      res.sendStatus(200);
      console.log('DB delete successful');
    })
    .catch(error => {
      res.sendStatus(500);
      console.log('DB delete failed: ', error);
    });
})




router.post('/', (req, res) => {
  console.log('NEW RESOURCE: ', req.body);

  const sqlTxt = `INSERT INTO "resources" 
                  ("user_id", "categories_id", "website", "description")
                  VALUES ($1, $2, $3, $4 );`;

  const sqlParams = [
    req.user.id,
    req.body.data.categories_id,
    req.body.data.website,
    req.body.data.description
  ];

  pool.query(sqlTxt, sqlParams)
  .then(dbRes=>{
    res.sendStatus(200);
    console.log('Add new resource successful');
  })
  .catch(error=>{
    res.sendStatus(500);
    console.log('Add new resource failed, ', error);
  })
})

module.exports = router;