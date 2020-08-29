const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
console.log(process.env.PASS);
// utility files.
app.use(express.json());
app.use(cors());
app.use('/', require('./routes/exercise-list.route'));

mongoose.connect(
	`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.wintt.mongodb.net/<dbname>?retryWrites=true&w=majority`,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log('mongodb connected!!')
);
mongoose.connection.on('error', (err) => console.log('error:', err))

app.listen(process.env.PORT || 5000, () => console.log('Server Connected!!'));
