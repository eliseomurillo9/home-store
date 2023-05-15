import { Schema } from "mongoose";
import productSchema from "./productSchema.js";

const cartProductSchema = productSchema;
cartProductSchema.add({ quantity: Number });

let orderSchema = new Schema({
  overall_status: {
    type: String,
    required: true,
    enum: [
      "CREATED",
      "PENDING-PAYMENT",
      "RECEIVED",
      "CONFIRMED",
      "IN-PROGRESS",
      "COMPLETED",
      "CANCELLED",
    ],
    default: "CREATED",
  },
  cart: {
    type: {
      products: [
        {
          type: cartProductSchema,
        },
      ],
      totalPrice: {
        type: Number,
      },
    },
    required: true,
  },
  user_email: {
    type: String,
    required: true,
  },
  mailing_address: {
    type: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      addressLine1: {
        type: String,
        required: true,
      },
      addressLine2: {
        type: String,
        required: false,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zipCode: {
        type: String,
        required: false,
      },
      country: {
        type: String,
        required: true,
        enum: ["El Salvador"],
      },
      mobilePhone: {
        type: String,
        required: true,
      },
    },
    required: true,
  },
  payment_info: {
    type: [
      {
        date: {
          type: Date,
          required: true,
          default: Date.now,
        },
        source: {
          type: String,
          required: true,
          enum: ["WOMPISV"],
        },
        type: {
          type: String,
          enum: ["FAILED", "PENDING", "SALE", "REFUND"],
          required: true,
        },
        transaction_id: {
          type: String,
          required: true,
        },
        amount_in_usd: {
          type: Number,
          required: true,
        },
        payment_service_response_dump: {
          type: Object,
          required: false,
        },
      },
    ],
    required: true,
  },
});

export default orderSchema;
