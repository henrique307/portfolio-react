export function httpResponseHandler(response: any) {
    return typeof response === "string" ? response : JSON.stringify(response, null, 2)
}