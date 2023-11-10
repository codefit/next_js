export const delay = () => {
    return new Promise((resolve) => setTimeout(resolve, 100))
}

export default async function getProducts(time
) {
    await delay(time)
    const res = await fetch(
        `${process.env.source}/products`
    )

    if (!res.ok) {
        throw new Error(`An error has occured: ${res.status}`)
    }

    return res.json()
}