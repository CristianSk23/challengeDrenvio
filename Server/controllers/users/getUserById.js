const getUserById = require("../../handlers/users/getUsersIdHandler");

const getUsersIdCtrl = async (req, res) => {
  const id = req.params.user_id;
  const product = req.params.nombre_producto;

  try {
    console.log("haciendo uso de la ruta Users");
    const users = await getUserById(id, product);
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).send("No users");
  }
};
module.exports = {
  getUsersIdCtrl,
};
