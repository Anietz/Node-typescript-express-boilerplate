//Set up mongoose connection
const mongoose = require("mongoose");

const testDB = process.env.TEST_DB_CONNECTION_URI; //Sandbox
const liveDB = process.env.LIVE_DB_CONNECTION_URI; //Live
const mongoDB = process.env.ENVIRONMENT == "production" ? liveDB : testDB;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;
