import { Router } from 'express';

import contactRouter from './contacts.routes';

const routes = Router();

routes.use('/contacts', contactRouter);

export default routes;