const Strategy = require ('passport').Strategy;
// const User = require ('../models/user-model');
const bcrypt = require ('bcrypt');

passport.serilazeUser((loddedInUser, cb)=>{
cb(null, loddedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb)=>{
  User.findById(userIdFromSession, (err, userDocument)=>{
    if (err) {
      cd(err);
      return;
    }
    cb(null, userDocument);
  });

});
