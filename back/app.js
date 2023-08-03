const express=require ('express')
const mysql=require('mysql')
const cors=require('cors')

const app=express()
app.use(cors())
app.use(express.json())

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'signup'
})

app.post('/signup',(req,res)=>{
    const sql='INSERT INTO login (`nombre`,`email`, `password`) VALUES (?)' //los campos se llaman con backticks``
console.log('hola mundo')
    const valores=[
        req.body.nombre,
        req.body.email,
        req.body.password,
    ]
 
    console.log(valores)
    db.query(sql,[valores],(error, data)=>{
        if(error){
            return res.json('error')
        }
        return res.json(data)
    })
})


app.listen(8085, ()=>{
    console.log('Servidor conectado')
})