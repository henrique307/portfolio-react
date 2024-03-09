export function grabDimension(url: string) {
    const parsedUrl = new URL(url)
    const params = parsedUrl.searchParams

    const width = +(params.get("w") || 600)
    const height = +(params.get("h") || 600)

    return { width, height }
}