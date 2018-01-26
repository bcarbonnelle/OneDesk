const passport = require('passport')
const mongoose = require('mongoose')
const User = mongoose.model('User')

exports.login = passport.authenticate('local',{
    failureRedirect:'/login',
    successRedirect:'/'
})
exports.isLoggedIn = (req,res,next)=>{
    if(req.isAuthenticated()){
        next()
        return
    }
    res.redirect('/login')
}
exports.logout=(req,res)=>{
    req.logout()
    res.redirect('/')
}