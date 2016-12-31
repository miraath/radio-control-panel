var express = require('express'),
user = require("../controllers/user"),
router = express.Router();

/* GET home page. */
router.post('/create', function(req, res) {   
    user.create(req.body, function(err, user){
        if(err)
            return res.send({succeed : false, err : err});
        res.send({succeed : true, user : user});
    });
});

router.post('/update', function(req, res) {  
    user.update(req.body, function(err){
        if(err)
            return res.send({succeed : false, err : err});
        res.send({succeed : true});
    });
});

router.post('/login', function(req, res) {  
    user.login(req.body.email, req.body.password, function(err, user){
        if(err)
            return res.send({succeed : false, err : err});
        res.send({succeed : true, user : user});
    });
});

module.exports = router;
