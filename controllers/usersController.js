
const mongoose = require('mongoose')
const User = mongoose.model('User')
const promisify = require('es6-promisify')

exports.login= (req,res,next)=>{
    res.render('login', {user:{}})
}
exports.verify= (req,res,next)=>{
    res.render('login',{title:'Login'})
}
exports.registerForm= (req,res,next)=>{
    res.render('register', {user:{}})
}
exports.validateRegister= (req,res,next)=> {
    console.log('validation started')
    req.sanitizeBody('name')
    
    req.checkBody('name','Vous devez entrer un nom').notEmpty()
    req.checkBody('email','Veuillez entrer un email').notEmpty()
    req.checkBody('password','Veuillez entrer un mot de passe').notEmpty()
    req.checkBody('confirmPassword','Veuillez entrer le mot de passe une deuxième fois').notEmpty()
    req.checkBody('confirmPassword','Les mots de passe ne sont pas identiques').equals(req.body.password)

    const errors =req.validationErrors();
    if(errors){
        console.log('validation failed')
        res.render('register',{'errors':errors})
    }
    else{
        console.log('validation is OK')
        next()
    }
    
}
exports.register= async (req,res,next)=>{
    console.log('creation started')
    const user = await new User({email: req.body.email,name:req.body.name,})
    const register = promisify(User.register,User)
    console.log(register)
    try{
        await register(user,req.body.password)
        console.log('creation succeeded')
    }
    catch(e){
        console.log(e)
    }
    next()
}