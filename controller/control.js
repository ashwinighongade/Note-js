const data = require("../jsondata.json")
const fs = require("fs")


get_data = (req, res) => {
    res.send(data)
}

with_Id = (req, res) => {
    const { id } = req.params;
    const Fd = data.find((c) => c.id == id);
    if (Fd) {
        res.send(Fd);
    }
    // }else{
    //     res.send("the course with given id ${res.params.id}")
    // }
}


get_Update_Id = (req, res) => {
    const { id } = req.params;
    const update_data = data.find((c) => c.id == id)
    if (update_data) {
        update_data.name = req.body.name;
        update_data.logo = req.body.logo;
        update_data.notes = req.body.notes;
        update_data.days_to_complete = req.body.days_to_complete;
        update_data.short_description = req.body.short_description;
        update_data.type = req.body.type;
        update_data.course_type = req.body.course_type;
        update_data.lang_available = req.body.lang_available;
        fs.writeFileSync('jsondata.json', JSON.stringify(data, null, 4));
        res.send('user  ${id} has been updated')
    } else {
        res.status(404).send('${req.params.id}  not found ')
    }
}

Delete=(req,res)=>{
    var { id }= req.params;
    const data_del=data.find((c)=>c.id==id)
    if (data_del){
        fs.writeFileSync("jsondata.json",JSON.stringify(data_del,null,4));
        res.send("delete information")
    }
    else{
        res.status(404).send(`${req.params.id} not found`)
    }
}
Post_Id = (req, res) => {
    
    dic= {
        id:req.params.id,
        name : req.body.name,
        logo : req.body.logo,
        notes : req.body.notes,
        days_to_complete : req.body.days_to_complete,
        short_description : req.body.short_description,
        type : req.body.type,
        course_type : req.body.course_type,
        lang_available : req.body.lang_available
        }
        data.push(dic)
        fs.writeFileSync("jsondata.json", JSON.stringify(data, null, 4));
        res.send('user  ${id} posted')
        console.log(dic)
     
}

module.exports = { get_data, with_Id, get_Update_Id ,Delete,Post_Id}   