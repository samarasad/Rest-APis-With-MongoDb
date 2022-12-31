//>>>>> TASK 

// Make PUT API 
// send the Data from POSTMAN 
// get the Data into Nodejs by using resquest.
//  Update the entire data

const express=require('express')
const getConnection=require('../MDBConnection')


const app=express();

app.use(express.json())

app.put('/:name',async(req,resp)=>
{
const connection=await getConnection()
console.log(req.body)

const acknowlodge= await connection.db('mydb').collection('students').updateOne({name:req.params.name},{$set:req.body})
resp.send(acknowlodge)


}).listen(3500,()=>
{
    console.log("Running On:3500")
})