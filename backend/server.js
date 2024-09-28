const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors=require("cors");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'register',
  port:3307,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});


app.post('/register', async (req, res) => {
    try {
      const {
        first_name,
        last_name,
        email,
        mobile_number,
        address,
        postal_code,
        city,
        land_mark,
        country,
      } = req.body;
      if (!first_name || !last_name || !email || !mobile_number || !address || !postal_code || !city || !land_mark || !country){
        res.status(400).send("all fields are required");
      }
      let userId=null;
      const userQuery = 'INSERT INTO Users (first_name, last_name, email, mobile_number) VALUES (?, ?, ?, ?)';
      const userResult = await db.query(userQuery, [first_name, last_name, email, mobile_number],(err,results)=>{
        let userId = results.insertId;
        console.log(userId);
      });
     
  
      const addressQuery = 'INSERT INTO Addresses (userId, address, postal_code, city, land_mark, country) VALUES (?, ?, ?, ?, ?, ?)';
      const addressResult=await db.query(addressQuery, [userId, address, postal_code, city, land_mark, country]);
  
      res.send('User registered successfully!');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error registering user');
    }
  });
const port = 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});