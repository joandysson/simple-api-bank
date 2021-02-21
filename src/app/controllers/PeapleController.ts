import { Request, Response } from 'express';
import People from '@models/People';
import { renderCreatePeople } from '@views/People';
import { validStore } from '@validators/people';

class PeopleController {
    async index() {

    }
}

export default new PeopleController;