import React from 'react';
import { Link } from "react-router-dom";
import logo from '../resource/checked.png';

function Nav() {
    return (
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <img class="navbar-toggler-icon" src={logo}></img>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-link active"> Home </Link>
                        <Link to="/start-up" class="nav-link"> Check </Link>
                        <Link to="/results" class="nav-link"> Result </Link>
                    </div>
                </div>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
        </>
    );
}

export default Nav;