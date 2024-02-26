var DataTypes = require("sequelize").DataTypes;
var _order = require("./order");
var _user = require("./user");

function initModels(sequelize) {
  var order = _order(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  order.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(order, { as: "orders", foreignKey: "user_id"});

  return {
    order,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;



