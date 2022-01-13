const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.Port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,

    useUnifiedTopology: true
}
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})


const CartRouter = require('./routes/cartroute');

app.use('/cart',CartRouter)
app.use('/',CartRouter)
const studentRouter = require('./routes/student');
app.use('/student',studentRouter)
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})