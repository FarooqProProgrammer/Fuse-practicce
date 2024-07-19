import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Company: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Birthday: {
    type: String,
    required: true,
  },
  Notes: {
    type: String,
    required: true,
  },

});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
