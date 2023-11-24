const router=require("express").Router()
const {getAllOrders,getParticularOrder,getParticularUserOrder,placeOrder,updateOrderStatus,cancelOrder,deleteOrder}=require("../Controller/OrderController")
const {verifyToken, isAdmin}=require("../middleware/AuthMiddleWare")


// to get all Orders
router.get("/allOrders",verifyToken, isAdmin,getAllOrders)


// to get the current user orders
router.get("/",verifyToken,getParticularUserOrder)


//to get particular Order
router.get("/:id",verifyToken,getParticularOrder)





// user can add the order
router.post("/addOrder",verifyToken,placeOrder)


// admin can update the product
router.put("/updateOrderStatus/:id",verifyToken, isAdmin,updateOrderStatus)


//
router.put("/cancelOrder/:id",verifyToken,cancelOrder)

// admin can delete the product
router.delete("/deleteOrder/:id",verifyToken, isAdmin,deleteOrder)



module.exports=router