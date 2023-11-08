"use client"
import Image from "next/image"

const ProductList = ({ results }) => {
    return (
        <>
            {results.map((product) => (
                <div
                    className="item"
                    key={product.id}
                >
                    <div className="image">
                        <Image
                            src={`https://picsum.photos/id/${Math.floor((Math.random() * 100) + 1)}/200/250`}
                            width={200}
                            height={400}
                            className="w-full  h-auto rounded-2xl"
                            alt={product.title}
                        />
                    </div>
                    <h2 className="text-lg font-bold py-6">{product.title}</h2>

                </div>
            ))}
        </>
    )
}

export default ProductList