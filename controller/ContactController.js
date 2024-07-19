import Contact from "../models/contact.js";
import { contactValidationSchema } from "../validators/validation.js";

class ContactController {
  static async createContact(req, res) {
    const {
      Name,
      Title,
      Company,
      Email,
      Phone,
      Address,
      Birthday,
      Notes,
    } = req.body;

    const { error } = contactValidationSchema.validate(req.body);

    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }


    const contact = Contact({
      Name,
      Title,
      Company,
      Email,
      Phone,
      Address,
      Birthday,
      Notes,
    });
    await contact.save();
    res.send(contact);
  }

  static async getAllContact(req,res){
    const contacts = await Contact.find();
    res.send(contacts)
  }
}

export default ContactController