const fs= require('fs')
const axios=require("axios");
axios.get("https://api.merakilearn.org/courses")
.then( i=>{
    Mdata=i.data
    data=JSON.stringify(Mdata,null,3)
    k=fs.writeFileSync("jsondata.json",data)
    serial_no=0
    for(i of Mdata){
        serial_no++
    }
})
.catch(Error=>{
    console.log(Error)
})