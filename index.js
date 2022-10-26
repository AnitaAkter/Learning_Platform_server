const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const Port = process.env.Port || 5000;

const courses = require("./data/courses.json");
const category = require('./data/data.json');

app.get("/", (req, res) => {
    res.send("Server is Running");
});

app.get("/courses", (req, res) => {
    res.send(courses);
});

app.get("/courses/:id", (req, res) => {
    const id = req.params.id;
    const courses_details = category.filter((n) => n.courses_id === id);
    res.send(courses_details);
});

app.get('/category', (req, res) => {
    res.send(category);
});
app.get('/category/:id', (req, res) => {
    const id = res.params.id;
    const category_details = category.find(n => n._id === id);
    res.send(category_details);
});

app.get('/checkOut_page/:id', (req, res) => {
    const id = req.params.id;
    const category_details = category.find(n => n._id === id);
    res.send(category_details);
});
