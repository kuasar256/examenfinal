const mongoose = require('mongoose');
const userSchema = new mongoose.userSchema({
    name: {
        type: String, 
        requred: true,
    },
    email: {
        tyoe: String,
        require: true,
        unique: true,
    },
    age: {
        type: Number,
        optional: true,
    }
});
const User = mongoose.model('User', userSchema);
MediaSourceHandle.exports = User;