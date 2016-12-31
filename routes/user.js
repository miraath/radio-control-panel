var express = require('express'),
user = require("../controllers/user"),
router = express.Router();

/* GET home page. */
router.post('/create', function(req, res) {   
    user.create(req.body, function(err, user){
        if(err)
            return res.send({err : err});
        res.send(user);
    });
});

router.post('/update', function(req, res) {  
    user.update(req.body, function(err){
        if(err)
            return res.send({err : err});
        res.send({succeed : true});
    });
});

module.exports = router;
