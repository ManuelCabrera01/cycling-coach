const express =require ('express');
const bcrypt = require ('bcrypt');
const User = require ('../models/user-model');


router.post('/signup',(reg, res, next)=>{
  const username =req.body.username;
  const pasword =req.doby.pasword;
  if (!username || !password){
    req.status (400).json.({message:'provide usename or password'});
    return;
  }
  User.findOne({username:username},'_id',(err, foundUser)=>{
    if(foundUser){
      res.status(400).json({message:'user name already exist'});
      return
    }
    const salt = bcrypt.genSaltSync(10);
    const hashPass  = Bcrypt.hashSync(password, salt);
    const theUser = new User;({
      username:username,
      password:pasword,
    });
    theUser.save((err)=> {
      if (err){
        res.status(500).json({message:'something went wrong'});
      }
      req.loging(foundUser,(err)=>{
        theUser.status=undefined;
        res.status(200).json(theUser);
      });
    )};  //theUset.save()
  });//USser.find
});//GET/signup


router.post('/login', (req, res, next )=> {
  const username = req.body.username;
   const password = req.body.password;

   User.findOne ({username: username }, (err, foundUser)=> {
     if (!foundUser ){
       res.status(400).json({message: 'incorrect username'});
       return;

     }

     if (!bcrypt.compareSync(password, foundUser.password)) {
       res.status(400).json({massage:"incorretc pasword"});
       return;
     }
     req.login(foundUser, (err) => {
       foundUser.password = undefined;
       res.status(200).json(foundUser);
     });
      });
        });

  router.post('/logout', (req, res, next) => {
    req.logout();
    res.status(200).json({ message: 'Success' });
  });
  router.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }

  res.status(403).json({ message: 'Unauthorized' });
});

router.get('/private', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.json({ message: 'This is a private message' });
    return;
  }

  res.status(403).json({ message: 'Unauthorized ' });
});

module.exports = router;
