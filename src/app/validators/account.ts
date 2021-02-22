import { NextFunction, Request, Response } from "express";
import * as Yup from 'yup';

export async function validStore(resquest: Request, response: Response, next: NextFunction) {
    const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório.'),
        dateBirthday: Yup.date().required('Data de aniversario é obrigatória'),
        cpf: Yup.string().length(11, 'CPF contém onze dígitos').required('CPF obrigatório.'),
        idPeople: Yup.number().required('É obrigatório informar o pessoa.'),
        balance: Yup.number().required('Saldo é obrigatório.'),
        typeAccount: Yup.mixed().oneOf(['C', 'P']).required('Tipo de é obrigatório.'),
    });

    await schema.validate(resquest.body, {
        abortEarly: false,
    });

    next();
}

export async function validDeposit(resquest: Request, response: Response, next: NextFunction) {
    const schema = Yup.object().shape({
        accountId: Yup.number().required('ID da conta é obrigatório.'),
        value: Yup.number().required('valor é obrigatório.'),
    });

    await schema.validate(resquest.body, {
        abortEarly: false,
    });

    next();
}