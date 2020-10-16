import Contact, { IContact } from '../models/Contact';

interface PropsSaveContact {
    name: String;
    address: String;
    address2: String;
    province: String;
    email: String;
    city: String;
};

class ContactRepository {
     public async saveContact({ ...res } : PropsSaveContact): Promise<IContact> {
        const contact = await Contact.create({
            ...res
        });

        return contact;
    };

    public async listContacts(): Promise<Array<IContact>> {
        const contacts = await Contact.find();

        return contacts;
    };
};

export default ContactRepository;