import { Router } from 'express';

import CreateContactService from '../services/CreateContactService';
import ContactRepository from '../repositories/ContactRepository';

const contactRouter = Router();

contactRouter.get('/', async (request, response) => {
    const contactRepository = new ContactRepository();

    const contacts = await contactRepository.listContacts();

    return response.json(contacts);
});

contactRouter.post('/', async (request, response) => {
    const { name, address, address2, province, email, city } = request.body;

    const createContactService = new CreateContactService();

    const contact = await createContactService.execute({
        name,
        address,
        address2,
        province,
        email,
        city
    });

    return response.json(contact);

});

export default contactRouter;