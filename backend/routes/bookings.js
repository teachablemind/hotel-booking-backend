const express = require("express");
const router = express.Router();

const db = require("../database/db");

router.post("/book", (req,res)=>{

const {

name,
email,
phone,
room,
checkin,
checkout,
amount,
payment_ref

} = req.body;

const sql = `
INSERT INTO bookings
(name,email,phone,room,checkin,checkout,amount,payment_ref,status)
VALUES (?,?,?,?,?,?,?,?,?)
`;

db.query(sql,[

name,
email,
phone,
room,
checkin,
checkout,
amount,
payment_ref,
"paid"

],(err,result)=>{

if(err) throw err;

res.json({message:"Booking saved"});

});

});

router.get("/bookings",(req,res)=>{

db.query("SELECT * FROM bookings",(err,results)=>{

if(err) throw err;

res.json(results);

});

});

module.exports = router;


const axios = require("axios");

async function verifyPayment(reference){

const response = await axios.get(

`https://api.paystack.co/transaction/verify/${reference}`,

{

headers:{
Authorization:`sk_test_41e5f44b96e9787e677f871839e79bf885fc1b2d`
}

});

return response.data;

}


fetch("http://localhost:5000/api/book",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name,
email,
phone,
room,
checkin,
checkout,
amount,
payment_ref

})

});