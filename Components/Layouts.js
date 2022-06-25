import React from 'react';
import Footer from './footer';
import Header from './header';
import SubNavBar from './subNavBar'



const Layouts = ({ children }) => {
    return (
        <>
            <Header />
            <SubNavBar />
            {children}
            <Footer />
        </>
    );
}

export default Layouts;
