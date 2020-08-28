const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	user: {
		type: String,
		required: true,
	},
});
module.exports = mongoose.model('user', UserSchema);
