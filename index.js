const express = require('express');
const app = express();
const Port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('API is running');
});
app.listen(Port, () => {
    console.log("Courses running in port", Port)
})