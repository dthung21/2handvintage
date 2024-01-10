import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://group6:group6123@ecommerce.eawhfmi.mongodb.net/ecommerce?retryWrites=true&w=majority',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  JWT_SECRET:process.env.JWT_SECRET || 'somethingsecret'
};
