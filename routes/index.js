const express = require('express')
const router = express.Router()
const pagesController = require(`${process.cwd()}/controllers/pagesController`)
const usersController = require(`${process.cwd()}/controllers/usersController`)
const authenticationController = require(`${process.cwd()}/controllers/authenticationController`)


router.get('/', pagesController.home)
router.get('/about', pagesController.about)
router.get('/login', usersController.login)
router.post('/login', authenticationController.login)
router.get('/logout',authenticationController.logout)
router.get('/register', usersController.registerForm)
router.post('/register', usersController.validateRegister,usersController.register)


module.exports = router