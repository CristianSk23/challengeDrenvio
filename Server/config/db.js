const mongoose = require("mongoose");

const uri =
  "mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin";

module.exports = () => {
  const connect = () => {
    mongoose.connect(uri);
    (err) => {
      if (err) {
        console.log("DB: error");
      } else {
        console.log("conección correcta");
      }
    };
  };
  connect();
};
