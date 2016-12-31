var bcrypt = require("bcryptjs"),
User = require("../models/user"),
saltRounds = 10;

exports.create = function(user, done){

    User.findOne({email : user.email.toLowerCase()}, function (err, doc) {
		
		var newUser = undefined;

        if(err) 
            return done(err);  
		
		if(doc) {
			err = {
				type : "email",
				msg : ".هذا البريد الإلكتروني يستخدمه حاليا عضو آخر، المرجو تغييره"
			};
			return done(err);
		}

		user.hashed_password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
		newUser = new User(user);

		newUser.save(function (err, user) {
			if(err)
                return done(err);
			delete user.hashed_password;
			return done(null, user);
		});
	});

};

exports.update = function(user, done){

	function updateUser(user, done){
		User.findOneAndUpdate({_id : user._id}, user, function(err, doc){
			if(err)
				return done(err)
			done(null);
		});	
	}

	if(user.email){
		User.findOne({email : user.email}, function (err, doc) {
			if(err)
				return done(err);

			if(doc._id == user._id)	
				return updateUser(user, done);

			if(doc){
				err = {
					type : "email",
					msg : ".هذا البريد الإلكتروني يستخدمه حاليا عضو آخر، المرجو تغييره"
				};
				return done(err);
			}
			
		});
	}
	else{
		updateUser(user, done);
	}

};



