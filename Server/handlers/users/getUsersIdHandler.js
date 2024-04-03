const modelUsers = require("../../models/users");
const modelProducts = require("../../models/products");
const get_usersId = async (id, product) => {
  try {
    let user = await modelUsers.find({ id }).exec();
    user = user[0];
    let productName = await modelProducts.find({ name: product }).exec();
    productName = productName[0];

    if (
      user &&
      typeof user.specialPricesBrand !== "undefined" &&
      user.specialPricesBrand === productName.brand
    ) {
      console.log("comparten marca para descuento");
      const userSpecialPrices = {
        brand: user.specialPricesBrand,
        specialPrice: productName.specialPrices,
      };
      return userSpecialPrices;
    }
    const userNoSpecialPrice = {
      productName: productName.name,
      price: productName.price,
    };
    console.log(userNoSpecialPrice);
    return userNoSpecialPrice;
  } catch (error) {
    console.error("Error al obtener al usuario:", error.message);
    return { error: "Error al obtener al usuario" };
  }
};
module.exports = get_usersId;
