//>>>>>> TASK

// Make DELETE API
// send the data from postman
// get the data from request 
// delete the resource or data from database.


const express=require('express')
const getConnection=require('../MDBConnection')


const app=express();

app.use(express.json())

app.delete('/delete',async(req,resp)=>
{
const connection=await getConnection()
console.log(req.body)

const acknowlodge= await connection.db('mydb').collection('students').deleteOne(req.body)
resp.send(acknowlodge)


}).listen(3500,()=>
{
    console.log("Running On:3500")
})