


const express = require("express")
const port = 3000;
const app = express();

//get in  the server  https method1
app.get('/', (req, res) => {
    console.log("this is node js and express.js ");
    res.send("this is node js and express js  ");
});
//post in the server https method2
app.post('/createuser', (req, res) => {
    console.log("user created are success");
    res.send('user created are success');
});
//putting in the server https method3
app.put('/updateuser', (req, res) => {
    console.log("user update are success");
    res.send('user update success');
});
//head in the server  https method
app.head('/retreiveuser', (req, res) => {
    console.log("user retreived are success");
    res.send('user retreived are success');

});
//delete in the server  https method
app.delete('/removeuser', (req, res) => {
    console.log("user removed  are success");
    res.send('user removed  are success');

});

//listening the server
app.listen(port, () => {

    console.log(`the server is running at localhost:${port}`);
});