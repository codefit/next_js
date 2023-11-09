export const delay = () => {
    return new Promise((resolve) => setTimeout(resolve, 100))
}

export default async function getProducts(time, shouldError
) {
    await delay(time)
    const res = await fetch(
        `https://dummyjson.com/products`
    )

    if (!res.ok || shouldError) {
        throw new Error(`An error has occured: ${res.status}`)
    }

    return res.json()
}