const express = require('express');
const router = express.Router();
//get
router.get('/', (req, res) => {

})
router.post('/', (req, res) => {
    var search = req.body
    console.log(search)

    res.json({ state: 'sucess' , rep:search.searchItem})

})


module.exports = router;