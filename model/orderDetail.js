const mongoose = require("mongoose");
const orderDetailSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
const OrderDetail = mongoose.model("OrderDetail", orderDetailSchema);

module.exports = OrderDetail;
