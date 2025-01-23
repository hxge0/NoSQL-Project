const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

// Pobieranie [w tym przypadku wszystkie] -> GET/READ
router.get('/', async (req, res) => {
	try {
		const blogs = await Blog.find();
		res.status(200).json(blogs);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// Pobieranie [w tym przypadku po ID] -> GET/READ
router.get('/:id', async (req, res) => {
	try {
		const blog = await Blog.findById(req.params.id);
		if (!blog) return res.status(404).json({ message: 'Wpis nie znaleziony' });
		res.status(200).json(blog);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// Tworzenie -> POST/CREATE
router.post('/', async (req, res) => {
	const blog = new Blog({
		title: req.body.title,
		content: req.body.content,
		author: req.body.author,
	});
	try {
		const newBlog = await blog.save();
		res.status(201).json(newBlog);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

// Edytowanie -> PUT/UPDATE
router.put('/:id', async (req, res) => {
	try {
		const updatedBlog = await Blog.findByIdAndUpdate(
			req.params.id,
			{
				title: req.body.title,
				content: req.body.content,
				author: req.body.author,
				category: req.body.category, // Dodanie kategorii
			},
			{ new: true }
		);
		if (!updatedBlog) {
			return res.status(404).json({ message: 'Blog nie znaleziony' });
		}
		res.status(200).json(updatedBlog);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

// Usuwanie [po ID] -> DELETE/DELETE
router.delete('/:id', async (req, res) => {
	try {
		const blog = await Blog.findByIdAndDelete(req.params.id);
		if (!blog) return res.status(404).json({ message: 'Wpis nie znaleziony' });
		res.status(200).json({ message: 'Wpis usunięty' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

//Pobieranie + filtrowanie -> GET/READ
router.get('/', async (req, res) => {
	try {
		const { author, title, sortBy } = req.query;

		const filter = {};
		if (author) filter.author = author;
		if (title) filter.title = { $regex: title, $options: 'i' };

		// Stwórz obiekt sortowania
		const sort = {};
		if (sortBy) {
			const [field, order] = sortBy.split(':');
			sort[field] = order === 'desc' ? -1 : 1;
		}

		// Pobierz blogi z filtrowaniem i sortowaniem
		const blogs = await Blog.find(filter).sort(sort);
		res.status(200).json(blogs);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

//Pobieranie [po kategoriach]
router.post('/', async (req, res) => {
	const blog = new Blog({
		title: req.body.title,
		content: req.body.content,
		author: req.body.author,
		category: req.body.category, // Dodanie kategorii
	});
	try {
		const newBlog = await blog.save();
		res.status(201).json(newBlog);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

module.exports = router;
