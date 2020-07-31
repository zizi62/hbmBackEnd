//chrome://inspect/#devices   debugger
const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const users = require ('./usersRouter')

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/users', users)

app.use((req, res)=>{
    res.send(404)
})

app.listen(process.env.PORT, ()=> {
  console.log('listen'+process.env.PORT)
})