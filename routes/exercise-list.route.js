const router = require('express').Router();
const User = require('../schema/user.schema');
const ExerciseList = require('../schema/exercise-list.schema');
const mongoose = require('mongoose');

router.get('/users', (req, res) => {
	User.find()
		.then((result) => {
			res.json(result);
		})
		.catch((err) => {
			if (err) throw err;
		});
});

router.post('/user', (req, res) => {
	const { user } = req.body;
	const userDB = new User({ user });
	userDB
		.save()
		.then(() => res.json('Exercise Added!'))
		.catch((err) => res.status(400).json(err));
});

router.delete('/users/:id', (req, res) => {
	User.findByIdAndDelete({ _id: req.params.id })
		.then((result) => res.json(result))
		.catch((err) => res.status(400).json(err));
});

router.get('/exercise-list', (req, res) => {
	ExerciseList.find()
		.then((result) => res.json(result))
		.catch((err) => res.status(400).json(err));
});

router.post('/exercise-list', (req, res) => {
	const { username, description, duration } = req.body;
	const Exercise = new ExerciseList({ username, description, duration });
	Exercise.save()
		.then((result) => res.json("deleted"))
		.catch((err) => res.status(400).json(err));
});

router.delete('/exercise-list/:id', (req, res) => {
	ExerciseList.findByIdAndDelete({ _id: req.params.id })
		.then((result) => res.json(result))
		.catch((err) => res.status(400).json(err));
});

module.exports = router;
