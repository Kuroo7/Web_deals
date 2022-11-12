require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const buildroutes = require('./routes/buildroutes')
const userRoutes = require('./routes/userRoutes')

const app = express();
app.use(express.json());


app.use('/api/sellbuildinfo', buildroutes)
app.use('/api/user', userRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Listning on port 4000');
        })
    })
    .catch((err) => {
        console.log("Not connected");
    })
