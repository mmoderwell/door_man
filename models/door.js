const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const doorSchema = new Schema({
	opener: String,
	date: { type: Date, default: Date.now }
});

const door = mongoose.model('door', doorSchema);

module.exports = door;