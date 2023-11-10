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
                            src={product.image}
                            width={350}
                            height={0}
                            className="w-full  h-auto rounded-2xl"
                            alt={product.title}
                        />
                    </div>
                    <h2 className="text-lg font-bold py-6">
                        <a href={`kurzy/${product.id}`}>{product.title}</a>
                    </h2>

                </div>
            ))}
        </>
    )
}

export default ProductList