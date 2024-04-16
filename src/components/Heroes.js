import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../resource/checked.png";
import homeContent from "../resource/home-page-info.json";

function Heroes(props) {
    return ( 
        <div class="px-4 py-5 my-5 text-center">
            <img class="d-block mx-auto mb-4" src={logo} alt="" width="57" height="57"></img>
            <h1 class="display-5 fw-bold text-body-emphasis">{homeContent.title}</h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">{homeContent.description}</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link to="/start-use" class="btn btn-primary btn-lg px-4 gap-3"> Try it now! </Link>
                </div>
            </div>
        </div>
    );
}

export default Heroes;