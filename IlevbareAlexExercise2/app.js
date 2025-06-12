// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//     let filePath = path.join(__dirname, 'views', '404.html');
//     let contentType = 'text/html';
    
//     if (req.url === '/') {
//         filePath = path.join(__dirname, 'views', 'index.html');
//     } else if (req.url === '/contact') {
//         filePath = path.join(__dirname, 'views', 'contact.html');
//     }

//     fs.readFile(filePath, (err, content) => {
//         if (err) {
//             res.writeHead(500);
//             res.end('Server Error');
//         } else {
//             res.writeHead(200, { 'Content-Type': contentType });
//             res.end(content, 'utf-8');
//         }
//     });
// });

// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)  => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    let path = './';

    if(req.url === '/') {
        path = path + 'views/index.html';
    } else if (req.url === '/contact') {
        path = path + 'views/contact.html';
    } else {
        res.statusCode = 404;
        path = path + 'views/404.html';
    }

    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
        } else {
            res.write(data);
            res.end();
        }
    });
    
});

server.listen(3000, 'localhost', () => {
    console.log('The server is running on port', 3000)
});