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

exports.login =  function (email, password, done) {
	
	User.findOne({email : email.toLowerCase()}, function(err, user) {

		if(err)
			return done(err);

		if(!user){
			err = {
				type : "input",
				msg : ".عنوان البريد الإلكتروني أو كلمة السر لا تطابق أي حساب"
			};
			return done(err);
		}

		bcrypt.compare(password, user.hashed_password, function(err, res) {

		    if(err){
		    	err = "ServerError: While comparing password";
		    	return done(err);
		    }

		    if(!res){
		    	err = {
					type : "input",
					msg : ".عنوان البريد الإلكتروني أو كلمة السر لا تطابق أي حساب"
				};
				return done(err);
		    }

		    user.hashed_password = undefined;

		    return done(null, user);
		});


	});
};


