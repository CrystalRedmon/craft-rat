const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');

const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// GET ALL COLORS FROM DB TO POPULATE DROPDOWN
router.get('/', rejectUnauthenticated, (req, res) => {
  
  const sqlTxt = `SELECT * FROM "colors";`;

  pool.query(sqlTxt)
    .then(dbRes => {
      res.send(dbRes.rows);
    })
    .catch(error => {
      res.sendStatus(500);
    })


})

router.get('/:id', (req, res) => {
  const sqlTxt =  `SELECT DISTINCT "colors"."name" 
                    FROM "colors" 
                    JOIN "supplies"
                    ON "supplies".colors_id = "colors".id
                    WHERE "supplies".id = $1;`;

  pool.query(sqlTxt, [req.params.id])
  .then(dbRes=>{
    res.send(dbRes.rows[0].name);
  })
  .catch(error=>{
    res.sendStatus(500);
  })

})



module.exports = router;
