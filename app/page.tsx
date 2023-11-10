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
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
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
