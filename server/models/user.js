var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

// var newUser = new User({
//   email: "batallonesa@gmail.com"
// });
//
// newUser.save().then((doc) => {
//   console.log('Saved User');
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//   console.log('Unable to save', err);
// });


module.exports = {User};
