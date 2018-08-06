import React from 'react';
import { firebase } from '../../firebase/index';

const Header = (props) => {

    const logout = () => {
        firebase.auth.signOut();
    }

    return (
        <div className="headerDiv">
            <div className="container">
                <ul className="headerUL">
                    <li>{props.user}</li>
                    <li className="logoutLI" onClick={logout}>logout</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;