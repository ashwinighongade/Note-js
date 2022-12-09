const express=require("express")
const router=express.Router()
const courses=require("../controller/control")

router.get('/',courses.get_data)

router.get('/:id',courses.with_Id)

router.put('/update/:id',courses.get_Update_Id)
router.delete('/delete/:id',courses.Delete)
router.post('/post',courses.Post_Id)





module.exports=router