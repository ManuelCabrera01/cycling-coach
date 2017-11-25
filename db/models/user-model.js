const mongoose  = require ('mongoose');
const Schema = mongoose.Schema;

 const userShema = new Shema({
   username : string,
   password :string

 },{
timestaps:{
  createAt:"created_at",
  updateAt: 'update_at'
}

});
const User = mongoose.model('User', userShema);
module.exports = User;
