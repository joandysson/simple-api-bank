import { Request, Response } from "express"

class TransactionController {
    // async block(request: Request, response: Response) {
    //     const accountExists = await Account.findOne(request.body.accountId)

    //     if (!accountExists) return response.json('Conta não encontrada').sendStatus(200)
    //     try {
    //         await Account.update(accountExists.id, {
    //             activeFlag: false
    //         })

    //         response.json({ saldo: accountExists.balance }).sendStatus(200)
    //     } catch (error) {
    //         response.json(error.message).sendStatus(500)
    //     }

    // }
}

export default new TransactionController;