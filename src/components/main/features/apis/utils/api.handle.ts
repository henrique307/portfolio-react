export class ApiHandle {
    private readonly _URL = "https://portfolioapi-production.up.railway.app"

    async auth(nome: string, email: string) {
        try {
            return await fetch(`${this._URL}/auth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome,
                    email
                })
            }).then(res =>  res.json())
        } catch(e) {
            throw e
        }
    }
}