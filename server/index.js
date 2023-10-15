const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
//use express.json() to get data into json format
app.use(express.json());
//Port 
const PORT = 5500;

//use cors
app.use(cors());

//import routes
const TodoItemRoute = require('./routes/todoItems');


//connect to mongodb ..
mongoose.connect("mongodb://127.0.0.1:27017/to-do-list")
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))


app.use('/', TodoItemRoute);



//connect to server
app.listen(PORT, ()=> console.log("Server connected") );
