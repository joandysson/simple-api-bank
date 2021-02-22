import People from "@models/People";
import { Request, Response, NextFunction } from "express";
import * as Yup from 'yup';

export async function validStore(resquest: Request, response: Response, next: NextFunction) {
    const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório.'),
        cpf: Yup.string().length(11, 'CPF contém onze dígitos').required('CPF obrigatório.'),
        dateBirthday: Yup.date().required('Data de aniversario é obrigatória'),
    });

    await schema.validate(resquest.body, {
        abortEarly: false,
    });

    next();
}