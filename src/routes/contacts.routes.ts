import { Router } from 'express';

import CreateContactService from '../services/CreateContactService';

const contactRouter = Router();

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