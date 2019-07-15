import React from "react";


function NavBar() {
    return (
        <div className="mvls-container">
            <nav className="mvls-nav">
                <span className="mvls-title">shoppers_hack</span>
                <a href="/">suppliers</a>
                <a href="/customers">Customer</a>
                <a href="/admin">Admin</a>
            </nav>
        </div>
    );
}

export default NavBar;