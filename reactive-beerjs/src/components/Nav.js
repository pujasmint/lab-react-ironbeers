import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from '@fortawesome/free-solid-svg-icons';
import './Nav.css'

function Nav() {
    return (
        <nav>
            <Link to="/">
                <FontAwesomeIcon className="nav-icon" icon={faHome}/>
            </Link>
        </nav>
    )
}

export default Nav;
