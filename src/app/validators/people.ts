import People from "@models/People";
import * as Yup from 'yup';

export async function validStore(people: People) {
    const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório.'),
        cpf: Yup.string().required('CPF obrigatório.'),
    });

    await schema.validate(people, {
        abortEarly: false,
    });
}