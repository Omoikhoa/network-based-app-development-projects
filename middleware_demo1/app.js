const express = require('express');

const app = express();
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

let students = [
    {   id: '1', 
        name: 'Alice', 
        major: 'Computer Science', 
        gpa: 3.2,
        profile: '/images/alice.jpg'
    },
    {   id: '2', 
        name: 'Bob', 
        major: 'Biology', 
        gpa: 3.0,
        profile: '/images/bob.jpg'},
    {   id: '3', 
        name: 'Charlie', 
        major: 'Physics', 
        gpa: 3.8,
        profile: '/images/charlie.jpg'}
];

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/students', (req, res) => {
    res.json(students);
});

app.get('/students/:sid', (req, res) => {
    let id = req.params.sid;
    let student = students.find(element => element.id === id);
    res.render('student', {student});
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/contact', (req, res) => {
    res.send('Contact page');
});

app.get('/contact-me', (req, res) => {
    res.redirect(301, '/contact');
});

app.listen(port, host, () => {
    console.log('The server is running at port', port);
});