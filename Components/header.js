import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';


const Header = () => {
    return (
        <>
            <Head>
                <title>Travel | Jonz</title>
                <link rel="icon" href="/logos/logo.svg" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" />
            </Head>
            <nav className="navbar navbar-light bg-ligh d-flex  bg-primary  shadow psition-fixed">
                <div className='container'>
                    <a className="navbar-brand d-flex text-white " href="#s">
                        <Image src="/logos/logo.svg" width="50" height="50" alt="" className='mx-1' /> <h1 className='font-weight-bold px-1'>TravelJonz</h1>
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link href='https://github.com/namkatcedrickjumtock?tab=repositories'>
                            <a > <i className="bi bi-github text-white fw-bold" style={{fontSize:'2em'}}> </i></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;

