var express = require('express'),
user = require("../controllers/user"),
router = express.Router();

/* GET home page. */
router.post('/create', function(req, res, next) {   
    user.create(req.body, function(err, user){
        if(err)
            return res.send({err : err});
        res.send(user);
    });
});

module.exports = router;
