require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());

//db connection
const mongourl= process.env.MONGOURL;
mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database Connection Error'));
db.once('open', ()=>{
    console.log('Connected to Database Successfully!');
});

app.use('/api', apiRoutes);

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})