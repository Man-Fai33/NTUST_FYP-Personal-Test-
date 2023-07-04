const { json } = require('body-parser');
const express = require('express');
const router = express.Router();

//get
router.get('/', (req, res) => {
    let requesterid = req.query.requesterid
    var user = ({
        email: "cheungmanfai330@gmail.com",
        name: "Man Fai",
        password: 1234567,
        signin: true
    })
    res.json({ user })

})

//post
router.post('/', (req, res) => {

    var user = req.body

    user.created = true

    res.json({ user })
})

//put
router.put('./', (req, res) => {
    res.json({ state: "put user" })
})

//delete
router.delete('./', (req, res) => {
    res.json({ state: "delete user" })
})





module.exports = router;