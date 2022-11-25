const express= require('express')
const app1=express()
const port=5000

const bodyParser=require("body-parser")
app1.use(bodyParser.json())
app1.use(bodyParser.urlencoded({extended:false}))
//Conexión base de datos
const mongoose=require('mongoose')
const cors=require('cors')
app1.use(cors([]))

mongoose
    //.connect('mongodb://localhost:27017/g_27')
    .connect('mongodb+srv://jahoki:policia35@juego-27.x32g03a.mongodb.net/test')
    .then(console.log("Conectado a la base de datos"))

const Esquema=require('./Esquema_articulo')


let rutas=require('./router/rutas')
app1.use('/articulos',rutas)

let rutas_usr=require('./router/rutas_usr')
app1.use('/usuarios',rutas_usr)

app1.listen(port,()=>console.log("Servidor Levantado..."))