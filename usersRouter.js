let { getUsers, addUser} = require('./usersRepository')


const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
router.get('/', async function (req, res) {
    let users = await getUsers(req.query.search)    
     res.send({ success: true, users })
})


router.post('/', async function (req, res) {
  
    console.log("req"+ req)
    let user = req.body.user
    let result = await addUser(user)
     res.send({ success: true, user })
})


module.exports = router
