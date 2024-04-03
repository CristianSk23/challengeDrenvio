const express = require("express");
const router = express.Router();
const { getProductsCtrl } = require("../controllers/products/getProducts");
const { getUsersIdCtrl } = require("../controllers/users/getUserById");

router.get("/products", getProductsCtrl);
router.get(`/price/:user_id/:nombre_producto`, getUsersIdCtrl);

module.exports = router;
