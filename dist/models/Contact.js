"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const ContactSchema = new mongoose_1.Schema({
    name: String,
    address: String,
    address2: String,
    province: String,
    email: String,
    city: String
});
exports.default = mongoose_1.model('Contact', ContactSchema);
