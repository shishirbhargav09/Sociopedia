const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URI).then((res) => {
    console.log(`Database Connected ${res.connection.host}`);
  }).catch((err) => {
    console.log(err);
    
  })
};
