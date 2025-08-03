const {Schema} = require("mongoose");

const WatchlistSchema = new Schema ({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
});

module.exports = { WatchlistSchema };