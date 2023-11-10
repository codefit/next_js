import Image from 'next/image'
import Link from 'next/link'

import getProducts from "@/app/util/getProducts";
import ProductList from "@/app/components/product/ProductList";

export default async function Home() {
  const data = await getProducts()

  return (
    <>
      <div className="relative brand flex place-items-center ">
              <Image
                  className="relative"
                  src="/logo.svg"
                  alt="Logo.js Logo"
                  width={350}
                  height={0}
                  priority
              />
      </div>

        <div className="product-list">
            <ProductList results={data} />
        </div>
    </>
  )
}
