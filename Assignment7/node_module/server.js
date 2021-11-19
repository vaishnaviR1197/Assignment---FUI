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
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const city = req.body.city;
    resp.setHeader("Content-Type", "text/html")
    resp.sendFile(__dirname + '/welcome.html');
    console.log("POST FirstName: " + firstName);
    console.log("POST LastName: " + lastName);
    console.log("POST City: " + city);

});


server.listen(port, () => {
    console.log(`http://localhost:${port} started `);
});
