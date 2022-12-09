const express=require("express")
const app=express();
const port=8000;
const bodyparser=require("body-parser")
const router=require("./router/index")


app.use(bodyparser.json())
app.use('/',router)




app. listen(port,()=>{
    console.log(`http://localhost ${port}`)
})
