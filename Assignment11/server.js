const express = require('express');
const server = express();
const port = 3000;
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get('/', (req, resp) => {
    resp.setHeader("Content-Type", "text/html")
    resp.sendFile(__dirname + '/index.html');
});

server.post('/welcome', (req, resp) => {
    resp.setHeader("Content-Type", "text/html");
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const city = req.body.city;


    if (firstName.length == 0 || firstName === "") {
        console.log("First Name is required ");
        resp.send('First Name is required');
    }
    else {
        console.log("POST First Name :" + firstName);
        resp.sendFile(__dirname + '/welcome.html');
    }

    if (lastName.length == 0 || lastName === "") {
        console.log("Last Name is required ");
        resp.send('Last Name is required');
    }
    else {
        console.log("POST Last Name :" + lastName);
        resp.sendFile(__dirname + '/welcome.html');
    }

    if (city.length == 0 || city === "") {
        console.log("City is required ");
        resp.send('City is required');
    }
    else {
        console.log("POST City :" + city);
        resp.sendFile(__dirname + '/welcome.html');
    }

});

server.get('/js/validate.js', (req, resp) => {
    resp.setHeader("Content-Type", "text/html");
    resp.sendFile(__dirname + '/js/validate.js');
});


server.listen(port, () => {
    console.log(`http://localhost:${port} started `);
});
