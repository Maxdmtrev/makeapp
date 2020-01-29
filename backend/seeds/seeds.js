// const bathBase = require ('./bathBase');
// require('dotenv').config()
// const mongoose = require ('mongoose');
//
// mongoose.connect (`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clusterelbrus-ntmbz.mongodb.net/makeApp?retryWrites=true&w=majority`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false
// });
// const Bath = require ('../models/todos');
//
//  function bathDB () {
//  try {
//    let bb = bathBase.keramaWall.map ((el) => {
//      const data = new Bath ({
//        img: el.img, title: el.title
//      });
//      data.save ();
//    });
//   return   bb;
//  } catch (e) {
//  }
//
//   mongoose.connection.close ();
// }
//
// bathDB ();
