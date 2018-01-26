const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const validator = require('validator')
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:'Thanks to introduce a name',
        trim:true
       
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        lowercase:true,
        validate:[validator.isEmail,'The email address format is not valid'],
        required:'Thanks to introduce an email'
    }
})

schema.plugin(passportLocalMongoose,{usernameField:'email'})
module.exports = mongoose.model('User',schema)


    
