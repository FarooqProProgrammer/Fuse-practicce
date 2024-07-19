import express from "express"
import ContactController from "../controller/ContactController.js";

const contactRouter = express.Router();

contactRouter.post('/add-contact', ContactController.createContact)
contactRouter.get('/get-contact', ContactController.getAllContact)

export default contactRouter