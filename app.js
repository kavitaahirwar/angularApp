const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const adminRouter = require('./routes/admin.routes');
mongoose.connect("mongodb+srv://kavitaahirwar:Kavita12345@cluster0.0rkdj.mongodb.net/angulardb?retryWrites=true&w=majority")
    .then(result => {
        console.log("connection successfully..");
    })
    .catch(err => {
        console.log(err);
    });
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/admin", adminRouter);

app.listen(4000, () => {
    console.log("server is running..");
})