const express = require('express');
const app = express();
const PORT = 2000;
const data = require('./data')
const cors = require('cors')


app.use(cors())

app.get('/', (req, res)=>{
    res.json(datja)
})

app.listen(PORT, ()=> console.log(`Server is running a http://localhost:${PORT}`))