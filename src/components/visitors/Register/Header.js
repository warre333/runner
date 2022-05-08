import React from 'react'

import Logo from "../../../images/logo.png"

const styles = {
    logo: {
        height: "50px",
        width: "25%",
        objectFit: "contain",
    }
}

function Header() {
  return (
    <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">        
            <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img src={Logo} alt="logo" style={styles.logo}/>
            </a>

            <div className="col-md-3 text-end">
                <a type="button" href="./login" className="btn btn-outline-primary me-2">Login</a>
                <a type="button" href="./register" className="btn btn-primary">Register</a>
            </div>
        </header>
    </div>
  )
}

export default Header