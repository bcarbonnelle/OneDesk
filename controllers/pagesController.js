const mongoose = require('mongoose')

exports.home= async (req,res)=>{
       
   
    res.render('home',{title:'ma home page', test:'est du contenu dynamique'})
}
exports.about= (req,res)=>{
    res.render('about',{title:'bout', test:'est du contenu dynamique'})
}