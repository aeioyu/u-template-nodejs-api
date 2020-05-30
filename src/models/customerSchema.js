import mongoose from '../mongo/mongoClient';

const CustomerSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number, default: 0 },
  role: { type: String },
  email: { type: String, unique: true, required: true },
});

const CustomerModel = mongoose.model('Customer', CustomerSchema);

export default CustomerModel;
