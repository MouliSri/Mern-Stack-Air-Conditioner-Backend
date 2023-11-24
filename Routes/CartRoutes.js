const router = require('express').Router();
const {
  getParticularUserCart,
  AddToCart,
  deleteCartItem,
  deleteAllCartItemsForUser,updateCart,checkCartItem
} = require('../Controller/CartController');
const { verifyToken } = require('../middleware/AuthMiddleWare');

// Get particular user's cart
router.get('/', verifyToken, getParticularUserCart);

// Add item to cart
router.post('/addToCart', verifyToken, AddToCart);

// Delete a single cart item
router.delete('/deleteCartItem/:id', verifyToken, deleteCartItem);

// Delete all cart items for a user
router.delete('/deleteAllCartItems', verifyToken, deleteAllCartItemsForUser);


router.put("/updateCartItem/:id",verifyToken,updateCart)


router.get("/checkCartItem/:productId",verifyToken,checkCartItem)

module.exports = router;
