export const delay = () => {
    return new Promise((resolve) => setTimeout(resolve, 100))
}

export default async function getArticles(time
) {
    await delay(time)
    const res = await fetch(
        `https://dummyjson.com/posts?limit=1`
    )

    if (!res.ok) {
        throw new Error(`An error has occured: ${res.status}`)
    }

    return res.json()
}