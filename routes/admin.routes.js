const express = require('express');
const adminModel = require('../model/admin.model');
const router = express.Router();

router.post("/signin", (request, response) => {
    adminModel.findOne({
            email: request.body.email,
            password: request.body.password
        })
        .then(result => {
            console.log(result);
            if (result)
                return response.status(200).json({ message: "Login successfully", result });
            else
                return response.status(404).json({ message: "invalid admin.." });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ error: "internal server error" });
        });
})

router.post("/signup", (request, response) => {
    console.log(request.body);
    adminModel.create({
            username: request.body.username,
            email: request.body.email,
            password: request.body.password
        })
        .then(result => {
            console.log(result);
            return response.status(201).json(result);
        })
        .catch(err => {
            console.log(err);
            return response.status(404).json({ error: "internal server error" });
        });
});


module.exports = router;