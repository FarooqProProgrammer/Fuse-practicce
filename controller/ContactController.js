import Contact from "../models/contact.js";
import { contactValidationSchema } from "../validators/validation.js";

class ContactController {
  static async createContact(req, res) {
    const {
      Name,
      Title,
      Tags,
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
      Tags,
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
}

export default ContactController