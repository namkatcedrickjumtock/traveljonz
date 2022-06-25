import React from 'react'
import Script from "next/script";

export default function Footer() {
    return (
        <div>
            <footer className='bg-dark'>
                <p className="text-center text-white">@Copy rights 2022 | TravelJonz LLC</p>
            </footer>
            <Script src={'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js'}></Script>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" />
        </div>
    );
}
