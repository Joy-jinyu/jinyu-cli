import React from "react";
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="page-header">
            <Link to="/">Free Chain</Link>
        </div>
    );
}

export default Header;