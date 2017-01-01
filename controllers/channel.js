var Channel = require("../models/channel"),
User = require("../models/user");

exports.create = function(userId, channel, done){
    User.findById(userId, function(err, user){
        var newChannel = undefined;

        if(err)
            return done(err);
        if(!user)
            return done("Something goes wrong, we can't check if you have enough permission to add a channel");
        if(!user.is_admin)
            return done("You dont't have enough permission to add a channel");

        newChannel = new Channel(channel);

        newChannel.save(function(err, channel){
            if(err)
                return done(err);
            done(null, channel);    
        });
    });
};

exports.update = function(){

};

exports.delete = function(){

};