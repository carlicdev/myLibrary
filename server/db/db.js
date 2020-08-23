const mongoose = require('mongoose');

const dbUser = process.env.MONGO_DB_USER;
const dbPassword = process.env.MONGO_DB_PASS;
const dbName = process.env.MONGO_DB;

const URI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.mkuls.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// Connectingo to MongoDB Atlas
mongoose.connect(URI,{useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false} )
        .then(db => console.log('connected to DB'))
        .catch(err => console.error(err));

module.exports = mongoose;