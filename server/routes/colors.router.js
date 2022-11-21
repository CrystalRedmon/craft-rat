const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');

const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// GET ALL COLORS FROM DB TO POPULATE DROPDOWN
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('inside colors router: ')
  const sqlTxt = `SELECT * FROM "colors";`;

  pool.query(sqlTxt)
    .then(dbRes => {
      console.log('All of the Colors from DB: ', dbRes.rows);
      res.send(dbRes.rows);
    })
    .catch(error => {
      console.log('DB req for all Colors failed: ', error);
      res.sendStatus(500);
    })


})

router.get('/:id', (req, res) => {
  console.log('Colors in the server: ', req.params);
  const sqlTxt =  `SELECT DISTINCT "colors"."name" 
                    FROM "colors" 
                    JOIN "supplies"
                    ON "supplies".colors_id = "colors".id
                    WHERE "supplies".id = $1;`;

  pool.query(sqlTxt, [req.params.id])
  .then(dbRes=>{
    res.send(dbRes.rows[0].name);
    console.log(dbRes.rows[0].name);
  })
  .catch(error=>{
    res.sendStatus(500);
    console.log('GET current color failed: ', error);
  })

})



module.exports = router;
