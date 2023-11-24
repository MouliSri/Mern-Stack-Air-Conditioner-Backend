const router=require("express").Router();
const {addCategory,deleteCategory,updateCategory,showAllCategory,getParticularCategory}=require("../Controller/CategoryController")
const {verifyToken, isAdmin}=require("../middleware/AuthMiddleWare")

router.get("/",verifyToken,isAdmin,showAllCategory)

router.get("/:id",verifyToken,isAdmin,getParticularCategory)


router.post("/addCategory",verifyToken,isAdmin,addCategory)


router.put("/updateCategory/:id",verifyToken,isAdmin,updateCategory)


router.delete("/deleteCategory/:id",verifyToken,isAdmin,deleteCategory)

module.exports=router