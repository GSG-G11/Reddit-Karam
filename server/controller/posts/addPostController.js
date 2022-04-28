const { addPostQuery } = require("../../database");
const { addPostSchema } = require("../../validation");
const cloudinary = require("cloudinary").v2;

const addPostController = (req, res, next) => {
    const image = req.files != null ? req.files.image : null;
    const { title, content, user_id} = req.body;

    const post = {
        title,
        content,
        user_id
    };

    cloudinary.uploader.upload(image.tempFilePath, (err, result) => {
        if (err) {
            next(err);
        } else {
            post.post_image = result.secure_url;
            addPostSchema.validateAsync({ title, content })
            .then((data) => {
                let { title, content, post_image, user_id } = post;
                return addPostQuery({ title, content, post_image, user_id })
            })
            .then((data) => {
                console.log(data.rows[0]);
                if(data.rows.length){
                    console.log(data.rows[0]);
                    res
                    .status(201)
                    .json({ msg: 'Post Added Successfully!', status: 201 });
                }
            })
            .catch(err => next(err))
        }
    })
    
    // cloudinary.uploader.upload(image.tempFilePath, (err, result) => {
    //     const post = {
    //         title: req.body.title,
    //         content: req.body.content,
    //         post_image: result.secure_url,
    //         user_id: req.body.user_id,
    //     };
    //     return post;
    // }, (posts) => {
    //     console.log(posts, 'Post here');
        
    // });
    
}

module.exports = addPostController;