import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
        .then(() => {})
        .catch( error => console.error(error))
    }

    return (
        <div className="navbar bg-neutral text-neutral-content">
        <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
        <Link to='/orders' className="btn btn-ghost normal-case text-xl">Orders</Link>
        <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
        <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
        {
            user?.email && <span>Wellcome {user.email}</span>
        }
        {
            user?.email ? 
            <button onClick={handleSignOut} className='btn btn-sm'>Logout</button>
            : 
            <Link to='/login'>
                <button className='btn btn-sm'>Login</button>
            </Link>   
        }
        </div>
    );
};

export default Header;