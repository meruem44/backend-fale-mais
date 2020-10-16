"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContactRepository_1 = __importDefault(require("../repositories/ContactRepository"));
;
class CreateContactService {
    async execute({ name, address, address2, province, email, city }) {
        const contactRepository = new ContactRepository_1.default();
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
}
;
exports.default = CreateContactService;
