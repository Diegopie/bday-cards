const express = require("express");
const fs = require("fs");
const apiRoutes = require('./routes/api-routes')
require('./config/db')();

// Set server
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./routes/htmlRoutes.js")(app);
app.use(apiRoutes);

app.listen(PORT, () => console.log("App listening on PORT: " + PORT));

// Routes ????????????????????????????????
    // GET   /notes   return note.html
    // GET *    return index.html


// fs

// API Routes
    // GET /api/notes    read db.json
    // POST  /api/notes     fs.read file, turn it into an array, append to that array, .then write file

// Delete ????????????????????????????