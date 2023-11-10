import { Metadata, ResolvingMetadata } from 'next'
import Image from "next/image";


async function getProduct(id) {
    const res = await fetch(`${process.env.source}/products/${id}`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function generateMetadata( { params, searchParams }){
    const product = await getProduct(params.slug);

    return {
        title : product.title
    }
}

export default async function Page({ params }) {

    const product = await getProduct(params.slug);

    return <>
        <p>
            My Post: {product.title}
        </p>
        <Image src={product.image} alt={product.title} width={600} height={0} />
    </>
}