const express = require('express');
const { v4: uuidv4 } = require('uuid');
const morgan = require('morgan');
const multer  = require('multer')
const path = require('path');

const app = express();
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

let students = [
	{   id: '1', 
		name: 'Alice', 
		major: 'Computer Science', 
		gpa: 3.2,
		profile: '/images/alice.jpg'},
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

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, './public/images');
	},
	filename: function (req, file, cb) {
	  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
	  cb(null,uniqueSuffix + path.extname(file.originalname));
	}
  });

const fileFilter = (req, file, cb) => {
	const mimeTypes = ['image/jpeg', 'image/png', 'image/gif']
	if (mimeTypes.includes(file.mimetype))
		return cb(null, true);
	else
		cb(new Error('Invalid file type. Only jpg, jpeg, png, and gif image files are allowed'), false);
}

const upload = multer({storage, fileFilter, limits:{fileSize:2*1024*1024}}).single('image');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));

app.get('/students', (req, res) => {
	res.render('students', {students});
});

app.get('/students/list', (req, res) => {
	res.json(students);
});

app.post('/students/list', upload, (req, res) => {
	let student = req.body;
	student.profile = '/images/' + req.file.filename;
	student.id = uuidv4();
	students.push(student);
	res.redirect('/students/list');
});

app.get('/students/new', (req, res) => {
	res.render('new');
});

app.listen(port, host, () => {
	console.log('The server is running at port', port);
});