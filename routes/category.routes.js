const express = require('express');
const categoryModel = require('../model/category.model');
const multer = require('multer');
const router = express.Router();

var storage = multer.diskStorage({
    destination: 'public/images',
    filename: function(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
var upload = multer({ storage: storage });

router.post("/add-category", upload.single("categoryImageUrl"), (request, response) => {
    console.log(request.body.categoryName);
    console.log(request.file.filename);
    categoryModel.create({
            categoryName: request.body.categoryName,
            categoryImageUrl: "http://localhost:3000/images" + request.file.filename
        })
        .then(result => {
            return response.status(201).json(result);
        })
        .catch(err => {
            return response.status(404).json({ error: "internal server" });
        });
});

module.exports = router;