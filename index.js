// import express
const express = require('express');
// import morgan
morgan = require('morgan');

const app = express();

let topMovies = [
    {
        title: 'The Nightmare Before Christmas',
        director: 'Tim Burton'
    },
    {
        title: 'Halloween Ends',
        director: 'David Gordon Green'
    },
    {
        title: 'The Conjuring',
        director: 'James Wan'
    },
    {
        title: 'Scary Movie',
        director: 'Keenan Ivory Wayans'
    },
    {
        title: 'Scream',
        director: 'Matt Bettinelli-Olpin & Tyler Gillett'
    },
    {
        title: 'Napoleon Dynamite',
        director: 'Jared Hess'
    },
    {
        title: 'Joker',
        director: 'Todd Phillips'
    },
    {
        title: 'Paranormal Activity',
        director: 'Oren Peli'
    },
    {
        title: 'The Irishman',
        director: 'Martin Scorsese'
    },
    {
        title: 'Pearl',
        director: 'Ti West'
    },
];

app.get('/movies', (req, res) => {
    res.json(topMovies);
});

app.get('/', (req, res) => {
    res.send('Testing Testing 123.');
});

app.use(express.static('public'));

app.use(morgan('common'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});