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
     res.send(users)
})


router.post('/', async function (req, res) {
    console.log("req"+ req)
    let user = req.body.user
    let result = await addUser(user)
     res.send({ success: true, user })
})

router.put('/', async function (req, res) {
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    // let id = req.body.id
    await updateUser(firstName,lastName,email )
     res.send({ success: true })
})
module.exports = router
