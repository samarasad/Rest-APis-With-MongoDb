//>>>>>> TASK 
// Make POST API
// Send the data from POSTMAN.
// get data into NodeJs by using request.
// write code for insert data into MongoDB.


const express=require("express")
const getConn=require('../MDBConnection')

const app=express();

app.use(express.json())

app.post('/post',async(req,resp)=>
{
          const connection=await getConn();
          const acknowlodge= await connection.db('mydb').collection('students').insertOne(req.body)
          resp.send(acknowlodge)
          


}).listen(3500)