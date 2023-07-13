const express = require('express');
const router = express.Router();

//get
router.get('/', (req, res) => {
    let requesterid = req.query.requesterid
    if (requesterid == null) {

        var user = ({
            email: "cheungmanfai330@gmail.com",
            name: "Man Fai",
            password: 1234567,
            signin: true
        })
    } else {

    }
    res.json({ user })

})


//post 
router.post('/', (req, res) => {
    var user = req.body
    user.name = "leo"
    user.created = true
    res.json({ user })
})

//put for update user information
router.put('/', (req, res) => {
    res.json({ state: "put user" })
})

//delete for user record
router.delete('/', (req, res) => {
    res.json({ state: "delete user" })
})





module.exports = router;