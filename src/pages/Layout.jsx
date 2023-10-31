import React from "react";
import { Outlet, Link } from "react-router-dom";


export default function Layout(){
    return(
        
        <div className="d-flex flex-column min-vh-100">
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">React Routing</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {/* <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a> */}
                            {/* s<Link className="nav-item nav-link" to="/">Home</Link> */}
                            <Link className="nav-item nav-link" to="Services">Services</Link>
                            <Link className="nav-item nav-link" to="About">About</Link>
                            <Link className="nav-item nav-link" to="Contact">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container">

            </div>
            <Outlet/>
            <footer className="text-center mt-auto">
                <p>Copyright©️ All Right Reserve, Mark S. Santos</p>
            </footer>
            </div>
    )
};