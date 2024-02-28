import { HttpComponentProps } from "../http.components"

export async function HttpService(req: HttpComponentProps, body: any) {

    const _URL = "https://portfolioapi-production.up.railway.app"

    if (req.auth) {
        try {
            return fetch(`${_URL}/auth`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                },
                body: JSON.stringify(body)
            }).then(res => {
                if (!res.ok) return res
                //`Opa! Não foi possivel atenticar-se ${res.statusText}`

                return res.json()
            })
        } catch (e: any) {
            return `Opa! Não foi possivel atenticar-se ${e.message}`
        }

    } else {
        const reqBody = req.method === "GET" ? null : JSON.stringify(body);

        return fetch(`${_URL}/users/${body.id ?? ""}`, {
            method: req.method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${req.authToken ?? ""}`
            },
            body: reqBody
        }).then(res =>  res.json())
    }
}