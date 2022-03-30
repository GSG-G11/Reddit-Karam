const { getUserQuery } = require('../../database')
const getUserController = (req, res) => {
    const user_id = req.params.id;
    
    getUserQuery(user_id)
    .then(data => {
        res
        .status(201)
        .json({data: data.rows[0], status: 201})
    })
    .catch(err => next(err))
}

module.exports = getUserController;