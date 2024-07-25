"use client";
import React, { useEffect, useState } from 'react';
import style  from './navbar.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import '@popperjs/core';
import './navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-light ${style.customer_navbar_wrapper}`}>
            <a className={`navbar-brand ${style.logo}`} href="#">Navigate English</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse mr-auto ${style.custom_nalink_wrapper}`} id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="#">English Tutorials</a>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Resources
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default Navbar