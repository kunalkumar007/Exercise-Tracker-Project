const mongoose = require('mongoose');

const exerciseListSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	duration: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model('exercise-list', exerciseListSchema);
