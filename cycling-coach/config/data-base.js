const mongoose = require ('mongoose');
const dbName = 'cycling-coach';


mongoose.connect (`mongodb://localhost/${dbName}`,  {useMongoClient :true});

const db = mongoose.connection
db.on('error',console.error.bind(console,'conection error'));
db.once(open()=>{
  console.log(`connected to ${dbName}database`)
})
