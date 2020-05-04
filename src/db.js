const mongoose = require('mongoose')

const { JINSEI_NUTRICION_MONGODB_HOST, JINSEI_NUTRICION_MONGODB_DATABASE } = process.env
const MONGODB_URI = `mongodb://${JINSEI_NUTRICION_MONGODB_HOST}/${JINSEI_NUTRICION_MONGODB_DATABASE}`

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log("Database connected"))
    .catch(db => console.log('Unable to connect to db'))