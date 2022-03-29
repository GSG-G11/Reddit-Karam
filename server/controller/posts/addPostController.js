const fs = require("fs");
const { addPostQuery } = require("../../database");
const { addPostSchema } = require("../../validation");

const addPostController = (req, res, next) => {
    // console.log(req.files.image);
    // function base64_encode(file) {
    //     // read binary data
    //     var bitmap = fs.readFileSync(file);
    //     // convert binary data to base64 encoded string
    //     return new Buffer(bitmap).toString('base64');
    // }
    // console.log(req.files.image);
    const image = `data:${req.files.image.mimetype};base64,${req.files.image.data.toString("base64")}`;
    const { title, content, user_id} = req.body;
    const post = {
        title,
        content,
        image,
        user_id
    };
    addPostSchema.validateAsync({ title, content })
    .then((data) => {
        const { title, content, image, user_id } = post;
        return addPostQuery({ title, content, image, user_id })
    })
    .then((data) => {
        console.log(data.rows[0]);
        if(data.rows.length){
            res
            .status(201)
            .json({ msg: 'Post Added Successfully!', status: 201 });
        }
    })
    .catch(err => next(err))
}

module.exports = addPostController;