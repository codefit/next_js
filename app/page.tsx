import Image from 'next/image'
import Link from 'next/link'

import getProducts from "@/app/util/getProducts";
import ProductList from "@/app/components/product/ProductList";
import getArticles from "@/app/util/getArticles";
import ArticleList from "@/app/components/article/ArticleList";

export default async function Home() {
  const products = await getProducts();

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


      <div className="container">
          <div className="product-list">
              <ProductList results={products} />
          </div>
      </div>
    </>
  )
}
