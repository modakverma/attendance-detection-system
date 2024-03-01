const {firstYearStudentesData,secondYearStudentesData,thirdYearStudentesData,fourthYearStudentesData} = require('./utils/firstYearStudentsData');
const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());


let firstYearData=[];


const admin = require("firebase-admin")
const serviceAccount = require("./attendancekey.json");
admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
    databaseURL:'https://attendancedetectionsystem-default-rtdb.firebaseio.com'
})
const db = admin.database();
const studentsRef = db.ref('Students');
studentsRef.on('value', snapshot => {
    firstYearData = snapshot.val();
    console.log(firstYearData)
});

app.get('/year=1',(req,res)=>{
    res.status(200).json({
        data:firstYearData
    })
})
app.get('/year=2',(req,res)=>{
    res.status(200).json({
        data:secondYearStudentesData
    })
})
app.get('/year=3',(req,res)=>{
    res.status(200).json({
        data:thirdYearStudentesData
    })
})
app.get('/year=4',(req,res)=>{
    res.status(200).json({
        data:fourthYearStudentesData
    })
})

app.listen(4500,()=>{
    console.log("app listening on port 4500")
})