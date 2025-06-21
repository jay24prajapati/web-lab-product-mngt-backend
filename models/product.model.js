const mongoose = require(`mongoose`);

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, minlength: 2 },
  description: { type: String, required: true, trim: true, minlength: 10 },
  imageUrl: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  quantity: { type: Number, required: true, min: 0 }
}, {
  timestamps: true
});

module.exports = mongoose.model(`Product`, productSchema);