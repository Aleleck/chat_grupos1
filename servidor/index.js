const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const app = express();

conectarDB(); 
app.use(cors());
 
app.use(express.json());
app.use('/api/grupos', require('./routes/grupos'));

app.listen(4000, ()=>{
    console.log('EL servidior esta corriendo')
})