const mongoose = require("mongoose");
const KEYS = require("./keys");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(KEYS.MONGO_URL, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Mongo Connected Successfully")
    }
});
