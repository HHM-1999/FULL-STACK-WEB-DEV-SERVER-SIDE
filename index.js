const express = require('express');
const app = express();
const cors = require('cors');
const Port = process.env.PORT || 5000;
const categories = require('./data/catagories.json');


app.use(cors())

app.get('/', (req, res) => {
    res.send('API is running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories);
});

app.get('/courses/:id', (req, res) => {
    console.log(req.params);
})
app.listen(Port, () => {
    console.log("Courses running in port", Port)
});