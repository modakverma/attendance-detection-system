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
});

app.get('/year=1', (req, res) => {
    const data = Object.values(firstYearData).filter((student) => student.year === 1);
    res.status(200).json({
        data:data
    })
})
app.get('/year=2', (req, res) => {
    const data = Object.values(firstYearData).filter((student) => student.year === 2);
    res.status(200).json({
        data:data
    })
})
app.get('/year=3', (req, res) => {
    const data = Object.values(firstYearData).filter((student) => student.year === 3);
    res.status(200).json({
        data:data
    })
})
app.get('/year=4', (req, res) => {
    const data = Object.values(firstYearData).filter((student) => student.year === 4);
    res.status(200).json({
        data:data
    })
})

app.listen(4500,()=>{
    console.log("app listening on port 4500")
})