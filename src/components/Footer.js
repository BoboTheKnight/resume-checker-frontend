import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../resource/checked.png';

function Footer(props) {
    return ( 
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top border-bottom">
                <p class="col-md-4 mb-0 text-body-secondary">© 2024 Resume Checker</p>

                <Link to="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img class="bi me-2" width="32" height="32" src={logo}></img>
                </Link>

                <ul class="nav col-md-4 justify-content-end">
                    <li class="nav-item"><Link to="/" class="nav-link px-2 text-body-secondary">Home</Link></li>
                    <li class="nav-item"><Link to="/start-use" class="nav-link px-2 text-body-secondary">Check</Link></li>
                    <li class="nav-item"><Link to="/results" class="nav-link px-2 text-body-secondary">Result</Link></li>
                </ul>
            </footer>
        </div>   
    );


}
    
export default Footer;