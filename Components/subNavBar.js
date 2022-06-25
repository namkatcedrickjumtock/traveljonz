import React from 'react';
import Link from 'next/link';
import Img from "next/image";


const SubNavBar = () => {
    return (
        <>
            <section className='container  bg-light shadow-sm' id='subNav'>
                <ul className="nav justify-content-center py-2 d-flex">
                    <li className="nav-item"></li>
                    <Link href="/">
                        <a className="nav-link py-3"> <Img src="/img/home.png" alt="" height={'20px'} width="20px" /> Home</a>
                    </Link>
                    <Link href="/Searched">
                        <a className="nav-link py-3"> <Img src="/img/search.png" alt="" height={'20px'} width="20px" /> Search</a>
                    </Link>
                    <Link href="/favorite">
                        <a className="nav-link py-3"> <Img src="/img/liked.png" alt="" height={'20px'} width="20px" /> Memories </a>
                    </Link>
                    <Link href="/Liked">
                        <a className="nav-link py-3"> <Img src="/img/favorite.png" alt="" height={'20px'} width="20px" /> Liked Places</a>
                    </Link>
                    <Link href="/About">
                        <a className="nav-link py-3"> <Img src="/img/about.png" alt="" height={'20px'} width="20px" /> About</a>
                    </Link>
                </ul>
            </section>
        </>
    )
}
export default SubNavBar;
