

const signupController = (req, res) => {
    const {username, email, password, confirmPass} = req.body;

    console.log(req.body);
    res.json(req.body)
};

module.exports = signupController;