//>>>>>> TASK 

// Make an API that GET the Data From MongoDB.
// Display the data to the CLient when Client request.
// MongoDB Connection should be in different File.


const express=require('express');
const connection = require('../MDBConnection');
const app=express();

app.get('/show',async(req,resp)=>
{
const conn=await connection();
const result= await conn.db('mydb').collection('students').find().toArray()
resp.send(result)

}).listen(3500,()=>
{
    console.log("Running:3500")
})





