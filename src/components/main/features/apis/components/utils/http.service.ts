import { HttpComponentProps } from "../interface/httpComponentProps.interface";

export async function HttpService(req: HttpComponentProps, authToken: string, body: any) {

    const _URL = "https://portfolioapi-production.up.railway.app"

    if (req.name === "AuthComponent") {
        try {
            return fetch(`${_URL}/auth`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                },
                body: JSON.stringify(body)
            })
        } catch (e: any) {
            return { message: `Opa! Não foi possivel atenticar-se ${e.message}` }
        }

    } else {
        const reqBody = req.method === "GET" ? null : JSON.stringify(body);

        try {
            return fetch(`${_URL}/users/${body.id ?? ""}`, {
                method: req.method,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authToken ?? ""}`
                },
                body: reqBody
            })
        } catch (e: any) {
            return { message: `Opa! Não foi possivel atenticar-se ${e.message}` }
        }
    }
}