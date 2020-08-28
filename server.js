const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// utility files.
app.use(express.json());
app.use(cors());
app.use('/', require('./routes/exercise-list.route'));

mongoose.connect('mongodb://localhost/extracker', { useNewUrlParser: true, useUnifiedTopology: true }, () =>
	console.log('mongodb connected!!')
);
mongoose.connection.on('error', (err) => console.log('error:', err));

app.listen(5000, () => console.log('Server Connected!!'));
