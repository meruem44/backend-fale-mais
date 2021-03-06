"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contacts_routes_1 = __importDefault(require("./contacts.routes"));
const routes = express_1.Router();
routes.use('/contacts', contacts_routes_1.default);
exports.default = routes;
