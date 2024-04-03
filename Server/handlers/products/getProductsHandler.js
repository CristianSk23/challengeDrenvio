const model = require("../../models/products");
const get_Products = async () => {
  try {
    const products = await model.find({ inStock: true }).exec();

    return products;
  } catch (error) {
    console.error("Error al obtener los productos:", error.message);
    return { error: "Error al obtener los productos:" };
  }
};
module.exports = get_Products;
