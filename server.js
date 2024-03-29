const express = require('express')
const app = express()
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const path = require('path')

const PORT = process.env.PORT || 3000 


//assets 
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('home')
})

//set Template Engine
app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

app.listen( PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})