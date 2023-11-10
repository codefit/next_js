import React from 'react'

import Link from "next/link";

const NavBar = () => {
    return (
        <header>
            <nav className="lg:container lg:m-auto">
                <ul className="lg:flex lg:align-items-center lg:justify-center">
                    <li>
                        <Link href="/">Domů</Link>
                    </li>
                    <li>
                        <Link href="/">O nás</Link>
                    </li>
                    <li>
                        <Link href="/">Kurzy</Link>
                    </li>
                    <li>
                        <Link href="/">Kontakt</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar
