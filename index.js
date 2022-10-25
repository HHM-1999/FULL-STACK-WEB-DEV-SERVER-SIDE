const express = require('express');
const app = express();
const cors = require('cors');
const Port = process.env.PORT || 5000;
const categories = require('./data/catagories.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('API is running');
});
app.listen(Port, () => {
    console.log("Courses running in port", Port)
});
app.get('/course-categories', (req, res) => {
    res.send(categories);
});
