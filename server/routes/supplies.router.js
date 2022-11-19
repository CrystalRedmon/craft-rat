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


router.get('/filter', (req, res)=>{
  console.log('About to filter');

  // 🛑 MAY REQUIRE AN IF STATEMENT IF ALL FILTER CATEGORIES ARE NOT CHOSEN
  // EXAMPLE- IF USER ONLY WANTS TO FILTER BY CATEGORY NO MATTER THE COLOR
  const sqlTxt=`SELECT * FROM "supplies"
                WHERE "categories_id" = $1 
                AND "color" = $2
                AND "scraps" = $3
                AND "user_id" = $4;`;

  const sqlParams =[
    req.body.data.categories_id,
    req.body.data.color,
    req.body.data.scraps,
    req.user.id
  ];

  pool.query(sqlTxt, sqlParams)
  .then(dbRes=>{
    res.send(dbRes.rows);
    console.log('Filter results: ', dbRes.rows);
  })
  .catch(error=>{
    res.sendStatus(500);
    console.log('Filter results failed: ', error);
  })

})





/// GET CURRENT ITEM TO DETAILS VIEW
router.get('/:id', rejectUnauthenticated, (req, res) => {
  console.log('I made it to the server: ', req.params.id);
  const sqlTxt = `SELECT * FROM "supplies" 
                  WHERE "user_id" = $1
                  AND "supplies".id = $2;`;

  const sqlParams = [
    req.user.id,
    req.params.id
  ];

  pool.query(sqlTxt, sqlParams)
    .then(dbRes => {
      console.log('Here is the current item: ', dbRes.rows);
      res.send(dbRes.rows);
    })
    .catch(error => {
      console.log('Get current item from DB failed: ', error);
      res.sendStatus(500);
    })


})

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log(req.body.data, req.user.id);

  /// SENDS ALL INFO EXCEPT CATEGORY ID. 
  /// CATEGORY IS ADDED SEPARATELY
  const sqlTxt = `INSERT INTO "supplies"
                      ("user_id", "categories_id", "color", "name", "product_details", "notes", "quantity", "image")
                      VALUES
                      ($1, $2, $3, $4, $5, $6, $7, $8)
                      RETURNING "id";`;

  const categories_id = req.body.data.category

  console.log('this is the category id', req.body.data.category)
  console.log('this is the real cat_id: ', Number(categories_id))
  const sqlParams = [
    req.user.id,
    categories_id,
    req.body.data.color,
    req.body.data.name,
    req.body.data.product_details,
    req.body.data.notes,
    req.body.data.quantity,
    req.body.data.image
  ];

  pool.query(sqlTxt, sqlParams)
    .then(dbRes => {
      res.sendStatus(200);
      console.log('New item Id: ', dbRes.rows[0].id);
    })
    .catch(error => {
      res.sendStatus(500);
      console.log('Add newItem failed: ', error);
    })

});


router.delete('/:id', (req, res) => {


  const sqlTxt = `DELETE FROM "supplies"
                    WHERE "id" = $1
                    AND "user_id" = $2;`;

  const sqlParams = [
    req.params.id,
    req.user.id
  ];

  console.log('This is the sqlTex and sqlParams: ', sqlTxt, sqlParams);

  pool.query(sqlTxt, sqlParams)
    .then(dbRes => {
      res.sendStatus(200);
      console.log('Delete item successful');
    })
    .catch(error => {
      res.sendStatus(500);
      console.log('Delete Item failed: ', error);
    })
})


router.put('/:id', (req, res) => {
  console.log('PUT req.body', req.body);

  const sqlTxt = `UPDATE "supplies"
                    SET "quantity" = $1,
                    "scraps" = $2,
                    "notes" = $3
                    WHERE "id" = $4;`;

  const sqlParams = [
    req.body.data.quantity,
    req.body.data.scraps,
    req.body.data.notes,
    req.body.data.id ///maybe req.params.id
  ];

    console.log('these are my sqlParams: ', sqlParams);

  pool.query(sqlTxt, sqlParams)
  .then(dbRes=>{
    console.log('PUT successful');
    res.sendStatus(201);
  })
  .catch(error=>{
    console.log('PUT failed. Error: ', error);
    res.sendStatus(500);
  });

});




module.exports = router;