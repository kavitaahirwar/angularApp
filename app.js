const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
mongoose.connect("mongodb+srv://kavitaahirwar:Kavita12345@cluster0.0rkdj.mongodb.net/angulardb?retryWrites=true&w=majority")
    .then(result => {
        console.log("connection successfully..");
    })
    .catch(err => {
        console.log(err);
    });

const port = process.env.PORT || 3000;

const adminRouter = require('./routes/admin.routes');
const userRouter = require('./routes/user.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/admin", adminRouter);
// app.use("/user", userRouter);

app.listen(port, () => {
    console.log("server is running..");
})