const express = require("express");
const mysql = require('mysql');
const app = express();
const dougter = express.Router();
const port = process.env.PORT || 3000;

const conxion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node'
});
conxion.connect((error) => {
    if (!!error) {
        console.log('No Conectado');
    }else{
        console.log('Conectado');
    }
});

app.get('/', (req, res) => {
    conxion.query('SELECT * FROM libros', (error, rows, field)=>{
        if (!!error) {
            console.log('Error!');
        } else {
            console.log('Hecho');
            res.json(rows);
        }
    });
});

app.listen(port, () => {
    console.log(`Runing on port ${port}`);
});

