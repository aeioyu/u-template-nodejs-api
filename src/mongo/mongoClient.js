const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // to resolve deprecated warning
  useCreateIndex: true,
  // require for findByIdAndUpdate
  useFindAndModify: false,
});

export default mongoose;
