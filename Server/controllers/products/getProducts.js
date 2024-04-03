const get_Products = require("../../handlers/products/getProductsHandler");

const getProductsCtrl = async (req, res) => {
  try {
    console.log("haciendo uso de la ruta");
    const products = await get_Products();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).send("No products");
  }
};
module.exports = {
  getProductsCtrl,
};
