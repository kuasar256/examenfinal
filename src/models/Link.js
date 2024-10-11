const mongoose = require('mongoose');


const Link = mongoose.model('User', 
    {
        name: String,
        url: String,
        visible: Boolean,
        archived: Boolean
    }
);

module.exports = User
