const User = require("../models/User")

async function getLinks(req, res) {
    const User = await User.find()
    res.json(User)
}

async function createLink(req, res) {
    const User = req.body // informacion que llegará desde el cliente
    const temp =  await Userser.create(User);
    res.json(temp)
}

async function updateLinkById(req, res) {
    const id = req.params.userId
    const user = req.body

    await User.findByIdAndUpdate(id, User)

    res.json({
        message: "user updated successfully!",
        data: User
    })
}

async function deleteLinkById(req, res) {
    const id = req.params.UserId
    await User.findByIdAndDelete(id)
    
    res.json({
        message: "User deleted successfully!"
    })
}


module.exports = {
    getUser,
    createUser,
    updateUserById,
    deleteUserById
}