const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Logowanie żądań
app.use(morgan('dev'));

// Parsowanie JSON z body żądań
app.use(bodyParser.json());

// Połączenie z MongoDB
mongoose
	.connect(
		`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jtutl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => console.log('Połączono z MongoDB Atlas!'))
	.catch((err) => console.error('Błąd połączenia z MongoDB:', err));

// Import routów
const blogRoutes = require('./routes/blogs');

// Stosowanie routów
app.use('/blogs', blogRoutes);

// Obsługa błędu 404
app.use((req, res) => {
	res.status(404).json({ message: 'Nie znaleziono' });
});

module.exports = app;
