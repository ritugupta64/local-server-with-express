const express = require('express')
const app = express()
const port = 3000
const path = require('path');

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/my-test-api', (req, res) => res.json({
    "name": "test",
    "company": "test123"
}))

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))