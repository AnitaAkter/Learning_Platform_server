const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const Port = process.env.Port || 5000;

const category = require('./data/data.json');

app.get("/", (req, res) => {
    res.send("Server is Running");
});


app.get('/category', (req, res) => {
    res.send(category);
});
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category_details = category.find(n => n._id === id);
    res.send(category_details);
});

app.get('/checkOut_page/:id', (req, res) => {
    const id = req.params.id;
    const category_details = category.find(n => n._id === id);
    res.send(category_details);
});

app.listen(Port, () => {
    console.log("done", Port);
});

module.exports = app;
