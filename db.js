const mongoose = require('mongoose')

const connect_url = 'mongodb+srv://emmanuelnwobodo:chimnadindu@recipe.naseuz9.mongodb.net/'


const connectDb = (url) => {
    return mongoose.connect(connect_url)
}


module.exports = connectDb