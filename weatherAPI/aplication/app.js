// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=7cbb431c8c0457b0b46715002d8e97b3
const axios = require('axios');
const express = require('express');
const cors = require('cors')
const app = express() 

app.use(cors())

const PORT = process.env.PORT || 5000

app.get('/weather/:city', async (req,res) => {
    try{
        const {city} = req.params;
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7cbb431c8c0457b0b46715002d8e97b3`) ;
        res.status(200).send({K: data.main.temp});
    }catch(e){
        res.send(400).send(e)
    }
})

app.listen(PORT , (req,res) => {
    console.log(`listen on port:${PORT}`)
    console.log(req,res)
    console.log(process.env.PORT )
})