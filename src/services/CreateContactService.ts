import { IContact } from '../models/Contact';
import ContactRepository from '../repositories/ContactRepository';

interface Request {
    name: String;
    address: String;
    address2: String;
    province: String;
    email: String;
    city: String;
};

class CreateContactService {
    public async execute({ name, address, address2, province, email, city } : Request): Promise<IContact> {
        const contactRepository = new ContactRepository();

        const contact = await contactRepository.saveContact({
            name,
            address,
            address2,
            province,
            email,
            city
        });

        return contact;
    }
};

export default CreateContactService;