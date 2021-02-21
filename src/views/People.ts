import People from "@models/People";

export function renderCreatePeople(people: People) {
    return {
        name: people.name,
    }
}
export function renderRefreshPeople(people: People| undefined) {
    if(!people) return {};
    return {
        name: people.name,
        cpf_cnpj: people.cpf,
    }
}