import React from "react";
import { Link } from "react-router-dom";
import '../css/HomePage.css'
import Nav from "../components/Nav"
import Heroes from "../components/Heroes";
import Footer from "../components/Footer";

function HomePage(){
    return (
        <div>
            <Nav />
            <Heroes />
            <Footer />
        </div>
    );
}

export default HomePage;