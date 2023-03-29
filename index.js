// import express
const express = require('express');
// import morgan
morgan = require('morgan');

const app = express();
fs = require('fs');
path = require('path');

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), { flags: 'a' })

let users = [
    {
        id: 1,
        name: "Claudia",
        facortieMovies: []
    },
    {
        id: 2,
        name: "Chase",
        facortieMovies: []
    }
],

let movies = [
    {
        Title: 'The Nightmare Before Christmas',
        Description: 'Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home causes confusion.',
        Genre:
        {
            Name: 'Fantasy',
            Description: 'Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds.',
        },
        Director:
        {
            Name: 'Henry Selick',
            Bio: 'Charles Henry Selick Jr. is an American film director, producer, screenwriter, production designer, and animator.',
            Birthyear: '1952',
            Deathyear: 'Present',
        },
        imageUrl: 'http://img3.wikia.nocookie.net/__cb20140317003345/disney/images/a/a0/Nightmarebeforechristmas.jpg',
        Year: '1993',
        Featured: 'Yes',
    },
    {
        title: 'Halloween Ends',
        Description: 'The saga of Michael Myers and Laurie Strode comes to a spine-chilling climax in the final installment of this trilogy.',
        Genre:
        {
            Name: 'Horror',
            Description: 'Genre of fiction whose purpose is to create feelings of fear, dread, repulsion, and terror in the audience',
        },
        Director:
        {
            Name: 'David Gordon Green',
            Bio: 'He is a producer and director, known for Halloween (2018), George Washington (2000) and Halloween Kills (2021).',
            Birthyear: '1975',
            Deathyear: 'Present',
        },
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BZTg1Y2Q3MzctMDlkOS00OGE1LWE4MjUtNmJjNDNkZmM2YmVkXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_FMjpg_UX1000_.jpg',
        Year: '2022',
        Featured: 'Yes',
    },
    {
        title: 'The Conjuring',
        Description: 'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.',
        Genre:
        {
            Name: 'Horror',
            Description: 'Genre of fiction whose purpose is to create feelings of fear, dread, repulsion, and terror in the audience',
        },
        Director:
        {
            Name: 'James Wan',
            Bio: 'James Wan is an Australian director, producer, screenwriter and comic book writer.',
            Birthyear: '1977',
            Deathyear: 'Present',
        },
        imageUrl: 'http://3.bp.blogspot.com/-9flRRF3zSzk/U2EZrjP0syI/AAAAAAAAEq8/lVOYWqveO8A/s1600/conjuring.jpg',
        Year: '2013',
        Featured: 'Yes',
    },
    {
        title: 'Scary Movie',
        Description: 'A year after disposing of the body of a man they accidentally killed, a group of dumb teenagers are stalked by a bumbling serial killer.',
        Genre:
        {
            Name: 'Comedy',
            Description: 'a drama of light and amusing character and typically with a happy ending',
        },
        Director:
        {
            Name: 'Keenen Ivory Wayans',
            Bio: 'Keenen Ivory Desuma Wayans is an American actor, comedian, and filmmaker.',
            Birthyear: '1958',
            Deathyear: 'Present',
        },
        imageUrl: 'https://www.themoviedb.org/t/p/original/i3a1GtprypwL3spy6irzZrwrGrR.jpg',
        Year: '2000',
        Featured: 'Yes',
    },
    {
        title: 'Scream',
        Description: '25 years after a streak of brutal murders shocked the quiet town of Woodsboro, Calif., a new killer dons the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the towns deadly past.',
        Genre:
        {
            Name: 'Horror',
            Description: 'Genre of fiction whose purpose is to create feelings of fear, dread, repulsion, and terror in the audience',
        },
        Director:
        {
            Name: 'Matt Bettinelli-Olpin',
            Bio: 'Matt Bettinelli-Olpin is an American director, writer, actor, and musician.',
            Birthyear: '1978',
            Deathyear: 'Present',
        },
        imageUrl: 'http://www.saltypopcorn.co.uk/film-images/scream~2022.jpg',
        Year: '2022',
        Featured: 'Yes',
    },
    {
        title: 'Coraline',
        Description: 'When Coraline moves to an old house, she feels bored and neglected by her parents. She finds a hidden door with a bricked up passage. During the night, she crosses the passage and finds a parallel world where everybody has buttons instead of eyes, with caring parents and all her dreams coming true. When the Other Mother invites Coraline to stay in her world forever, the girl refuses and finds that the alternate reality where she is trapped is only a trick to lure her.',
        Genre:
        {
            Name: 'Fantasy',
            Description: 'Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds.',
        },
        Director:
        {
            Name: 'Henry Selick',
            Bio: 'Charles Henry Selick Jr. is an American film director, producer, screenwriter, production designer, and animator.',
            Birthyear: '1952',
            Deathyear: 'Present',
        },
        imageUrl: 'https://www.themoviedb.org/t/p/original/ytBaJAcaTvONnOBziIijzkMk64f.jpg',
        Year: '2009',
        Featured: 'Yes',
    },
    {
        title: 'Joker',
        Description: 'A failed comedian begins a slow descent into madness as he transforms into a criminal mastermind.',
        Genre:
        {
            Name: 'Crime Drama',
            Description: 'A genre of film or television that deals with serious, often negative, emotions with crime as a central element.',
        },
        Director:
        {
            Name: 'Todd Phillips',
            Bio: 'Todd Phillips is an American film director, producer, and screenwriter.',
            Birthyear: '1970',
            Deathyear:'Present',
        },
        imageUrl: 'https://wallpapercave.com/wp/wp4606146.jpg',
        Year: '2019',
        Featured: 'Yes',
    },
    {
        title: 'Paranormal Activity',
        Description: 'A couple set up video cameras throughout their home to capture evidence of a haunting.',
        Genre:
        {
            Name: 'Horror',
            Description: 'Genre of fiction whose purpose is to create feelings of fear, dread, repulsion, and terror in the audience',
        },
        Director:
        {
            Name: 'Oren Peli',
            Bio: 'Oren Peli is an Israeli film director, producer and screenwriter, known for directing the 2007 film Paranormal Activity.',
            Birthyear: '1970',
            Deathyear: 'Present',
        },
        imageUrl: 'https://www.themoviedb.org/t/p/original/1bjA7de4O0NhMsaOqwvrecophUs.jpg',
        Year: '2007',
        Featured: 'Yes',
    },
    {
        title: 'The Irishman',
        Description: 'Hit man Frank Sheeran becomes an enforcer for Jimmy Hoffa -- a Teamster tied to organized crime.',
        Genre:
        {
            Name: 'Crime Drama',
            Description: 'A genre of film or television that deals with serious, often negative, emotions with crime as a central element.',
        },
        Director:
        {
            Name: 'Martin Scorese',
            Bio: 'Martin Charles Scorsese is an American film director, producer, screenwriter and actor. Scorsese emerged as one of the major figures of the New Hollywood era.',
            Birthyear: '1942',
            Deathyear: 'Present',
        },
        imageUrl: 'https://cdn.traileraddict.com/content/netflix/irishman-2019-poster-2.jpg',
        Year: '2019',
        Featured: 'Yes',
    },
    {
        title: 'Pearl',
        Description: 'In 1918, a young woman on the brink of madness pursues stardom in a desperate attempt to escape the drudgery, isolation and lovelessness of life on her parents farm.',
        Genre:
        {
            Name: 'Horror',
            Description: 'Genre of fiction whose purpose is to create feelings of fear, dread, repulsion, and terror in the audience',
        },
        Director:
        {
            Name: 'Ti West',
            Bio: 'Timon C. West is an American film director, producer, screenwriter, editor, cinematographer, and occasional actor, best known for his work in horror films.',
            Birthyear: '1980',
            Deathyear: 'Present',
        },
        imageUrl: 'https://arotimes.com/wp-content/uploads/2022/08/Pearl-Movie-Poster-820x1024.jpg',
        Year: '2022',
        Featured: 'Yes',
    },
];

app.use(morgan('common', {stream: accessLogStream }));

app.get('/movies', (req, res) => {
    res.json(topMovies);
});

app.get('/', (req, res) => {
    res.send('Testing Testing 123.');
});

app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
    app.listen(8080, () => {
        console.log('Your app is listening to port 8080.');
});