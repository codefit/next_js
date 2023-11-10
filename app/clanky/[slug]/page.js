import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'

import Image from "next/image";

export async function generateMetadata( { params, searchParams }){
    const product = await getProduct(params.id);

    return {
        title : product.title
    }
}

export default async function Page({ params }) {

    const product = await getProduct(params.id);

    return <>
        <p>
            My Post: {product.title}
        </p>
        <Image src={product.image} alt={product.title} width={600} height={0} />
    </>
}
