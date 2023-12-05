"use client"
import Image from "next/image"

const ArticleList = (test) => {

    return (
        <>
            {test.map((article) => (
                <div key={article.id}>
                    <div className="image">
                        <Image
                            src="/laravel.jpg"
                            width={350}
                            height={0}
                            className="w-full  h-auto rounded-2xl"
                            alt={article.title}
                        />
                        <h2>${article.title}</h2>
                    </div>
                </div>
            ))}
        </>
    )
}
export default ArticleList
