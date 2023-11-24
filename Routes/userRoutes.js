const router=require("express").Router();
const {login,register,getAllUsers,updateProfile,deleteParticularUser,updatePassword,getUser,logout} =require( "../Controller/UserContoller");
const {verifyToken, isAdmin}=require("../middleware/AuthMiddleWare")




// to get current user profile data of user
router.get("/",verifyToken,getUser);   // -> /user  


// get all users
router.get("/allUsers",verifyToken,isAdmin,getAllUsers)    // -> user/allUsers



// adding new user
router.post("/register",register)   // -> user/register

// authentication
router.post("/login",login)     // -> /user/login

//log out
router.post("/logout",logout)   // -> user/logout


router.put("/updatePassword",verifyToken,updatePassword)  // updating the current user password  ->  /user/updatePassword


// update user  we can update the phone number and the name

router.put("/updateprofile/:id",updateProfile)      // -> user/updateprofile


// deleting the user
router.delete("/deleteUser/:id",verifyToken,isAdmin,deleteParticularUser)     // -> to delete the particular user








module.exports=router