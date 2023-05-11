const express = require('express');
const bodyParser = require('body-parser');
const error = require('./error')
const ejs = require('ejs')
const mongoose = require('mongoose')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express()
const port = 8000;
const connectDb = require('./db')
const userRoutes = require('./route/route')





app.use(express.static('view'))
app.use('/view/css', express.static(__dirname + 'view/css'))
app.use('/view/js', express.static(__dirname + 'view/js'))
app.use('/view/images', express.static(__dirname + 'view/images'))


app.set('views', './view')
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(error)



app.get('/', (req, res) => {
    res.render('index')

})

app.get('/index', (req, res) => {
    res.render('index')

})


const start = async () => {
    try {
        await connectDb()
        app.listen(port, () => console.log(`Recipe blog is running on port ${port} !!`))
        if (connectDb)
            console.log('connected to MongoDb!!')
    } catch (error) {
        console.log(error)
    }
}



start()