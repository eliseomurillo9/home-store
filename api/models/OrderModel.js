import { model } from "mongoose";
import orderSchema from "./schema/orderSchema.js";

export default model('Order', orderSchema);