//check version
const [major,minor]=process.versions.node.split('.').map(parseFloat)
if(major <7 || major === 7 && minor <= 5){
    console.log('The node version is too low for modern node programming')
    throw('The node version is too low for modern node programming')
}

//initialze Env Variables
require('dotenv').config({path:'.variables.env'})

// launch Mongo DB connection
const mongoose = require('mongoose')
mongoose.Promise = global.Promise 
mongoose.connect(process.env.DB_HOST,(err)=>{
    if(err) console.log('Issue during the DB connection initialization')
    console.log('Mongo DB is now up & running')
})

// importation de tous les modèles
require(`${process.cwd()}/models/User`)

//Start your app if everything is allright and initialized

const app = require('./app')
app.set('port', process.env.PORT || 8000)
const server = app.listen(app.get('port'),()=>{
    console.log(`Express is running on port ${server.address().port}`)
})