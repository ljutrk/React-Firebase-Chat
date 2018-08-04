import React from 'react';
import { firebase } from '../../firebase/index';

const Header = (props) => {

    const logout = () => {
        firebase.auth.signOut();
    }

    return (
        <div className="headerDiv">
            <ul className="headerUL">
                <li>{props.user}</li>
                <li className="logoutLI" onClick={logout}>logout</li>
            </ul>
        </div>
    );
}

export default Header;