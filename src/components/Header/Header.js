import React from 'react';
import { useState } from 'react';
import './Header.css'

const Header = () => {
    const [navIsOpen, setNavIsOpen] = useState(false);

    const click = () => {
        if(document.getElementById("navbarNavAltMarkup").classList.contains("show")){
            document.getElementById("navbarNavAltMarkup").classList.remove("show");
            setNavIsOpen(false);
        }
        else{
            return;
        }
    }
    return (
        <div className="header-container">
            <nav className="navbar nav-bar navbar-expand-lg bg-light fixed-top">
                <div className="container">
                    <a className="nav-brand" href="#home">Sajib Hossan</a>

                    <button onClick={() => setNavIsOpen(!navIsOpen)} className="menu-bar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        {
                            navIsOpen ? <i className="fa-solid fa-xmark fs-2 me-1"/> : <i className="fa-solid fa-bars-staggered" />
                        }
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div onClick={() => click()} className="navbar-nav ms-auto">
                            <a className="nav-link" href="/#home">Home</a>
                            <a className="nav-link" href="/#about">About</a>
                            <a className="nav-link" href="/#skills">Skills</a>
                            <a className="nav-link" href="/#projects">Projects</a>
                            <a className="nav-link" href="/#contact">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Header;