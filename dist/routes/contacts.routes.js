"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateContactService_1 = __importDefault(require("../services/CreateContactService"));
const ContactRepository_1 = __importDefault(require("../repositories/ContactRepository"));
const contactRouter = express_1.Router();
contactRouter.get('/', async (request, response) => {
    const contactRepository = new ContactRepository_1.default();
    const contacts = await contactRepository.listContacts();
    return response.json(contacts);
});
contactRouter.post('/', async (request, response) => {
    const { name, address, address2, province, email, city } = request.body;
    const createContactService = new CreateContactService_1.default();
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
exports.default = contactRouter;
