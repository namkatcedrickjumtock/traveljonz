import React from 'react'

export function Header() {
    return (
        <nav className="navbar navbar-light bg-ligh d-flex  bg-primary  shadow psition-fixed">
            <div className='container'>
                <a className="navbar-brand d-flex text-white " href="#s">
                    <img src="Assets/img/logo.svg" width="50" height="50" alt="" className='mx-1' /> <h1 className='font-weight-bold px-1'>TravelJonz</h1>
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <a className='nav-link' href='https://github.com/namkatcedrickjumtock?tab=repositories'><i className="bi bi-github text-white fw-bold"> </i></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
