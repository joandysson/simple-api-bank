import Transaction from "@models/Transaction";
import { renderHistoryAll } from "@views/Transaction";
import { Request, Response } from "express"

class TransactionController {
    async historyAll(request: Request, response: Response) {
        const trasactionsExists = await Transaction.find(request.body.accountId)

        if (!trasactionsExists) return response.status(200).json('Conta não encontrada')

        response.status(200).json(renderHistoryAll(trasactionsExists));

    }
}

export default new TransactionController;