import React from 'react';

const SubNavBar = () => {
    return (
        <section className='container mx-auto bg-light' id='subNav'>
            <ul className="nav justify-content-center py-">
                <li className="nav-item">
                    <a className="nav-link py-3" href="dsd"><img src='Assets/img/home.png' alt='' className='img-fluid'/> Experiences</a>
                </li>
                <li className="nav-item">
                <a className="nav-link py-3" href="dsd"><img src='Assets/img/search.png' alt='' className='img-fluid'/> Search</a>
                </li>
                <li className="nav-item">
                <a className="nav-link py-3" href="dsd"><img src='Assets/img/favorite.png' alt='' className='img-fluid'/> Favorite</a>
                </li>
                <li className="nav-item">
                <a className="nav-link py-3" href="dsd"><img src='Assets/img/liked.png' alt='' className='img-fluid'/> Likied</a>
                </li>
                <li className="nav-item">
                <a className="nav-link py-3" href="dsd"><img src='Assets/img/about.png' alt='' className='img-fluid'/> About</a>
                </li>
            </ul>
        </section>
    );
}

export default SubNavBar;
