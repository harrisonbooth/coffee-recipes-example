const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const parser = require('body-parser');
const cors = require('cors');

app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
  .then(client => {
    const db = client.db('coffee_recipes');
    const recipes = db.collection('recipes');

    app.get('/api/recipes', (req, res) => {
      recipes
        .find()
        .toArray()
        .then(docs => {
          res.json(docs);
        })
        .catch(err => {
          res.status(500);
          res.json({ status: 500, message: err })
        })
    });
  });

app.listen(3002, () => {
  console.log(`App is listening on port 3002`);
})
