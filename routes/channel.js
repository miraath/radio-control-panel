var express = require('express'),
channel = require("../controllers/channel"),
router = express.Router();

/* GET home page. */
router.post('/create', function(req, res) {   
    channel.create(req.body.userId, req.body, function(err, channel){
        if(err)
            return res.send({succeed : false, err : err});
        res.send({succeed : true, channel : channel});
    });
});

module.exports = router;