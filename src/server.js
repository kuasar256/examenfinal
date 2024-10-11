const mongoose = require('mongoose')
const User = require("./database/User")

mongoose.connect('mongodb://loclhost:27017/SERVERUSER', {
    usenewUrlparser: true,
    useinifiedTopology: true,
})
.then(( ) = console.log('MongoDB  connectecd'))
.catch(err = console.error('MongoDB connect error:', err))
module.exports = Server