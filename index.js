const express = require('express');
const cors = require('cors');
const routes = require('./Routes');

const app = express();

app.use(cors());    
app.use(express.json());
app.use(routes);

//const app = express();
//app.use(express.json());
//app.use(cors());
const port = 3000;

app.listen(port, ()=>{
    console.log(`App running on port ${port}.`);
});

