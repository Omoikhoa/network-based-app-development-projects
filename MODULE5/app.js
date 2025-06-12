const express = require('express');

const app = express();
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

let students = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Charlie'}]

app.get('/', (req, res) => {
	// console.log(__dirname);
	// console.log(req.url);
	// console.log(req.query);
	// res.sendFile('./views/index.html', {root: __dirname});
	// res.send('Home Page');

	res.render('index');
});

app.get('/students', (req, res) => {
	res.json(students);
});

app.get('/students/:sid', (req, res) => {
	// console.log(req.params);
	let id = req.params.sid;
	let student = students.find(element => element.id === parseInt(id));
	console.log(student);
	// res.send('Send Students with ID');
	// res.json(student);
	res.render('student', {student});
});

app.get('/about', (req, res) => {
	res.send('About Page');
});

app.get('/contact', (req, res) => {
	res.send('Contact Page');
});

app.get('/contact-us', (req, res) => {
	res.redirect(301, '/contact');
});

app.listen(port, host, () => {
	console.log('The server is running at port', port);
})