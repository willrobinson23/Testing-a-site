import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

function Navbar() {
    const { user, logout } = useAuth();
    const [mode, setMode] = useState("signup"); 
    
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-brand">SwanHub</Link>
            <div className='navbar-links'>
                <Link to="/" className='navbar-link' >Home</Link>
                <Link to="/checkout" className='navbar-link'>Cart</Link>
            </div>
            <div className='navbar-auth'>
                <div className='navbar-auth-links'>
                    {user ? (
                        <>
                        <div className="navbar-user">Welcome, {user.email}!</div>
                        <button className='btn btn-secondary' onClick={logout}>Logout</button>
                        </>
                        
                    ) : (
                        <>
                            <Link to="/auth?mode=login" className='btn btn-secondary'>Login</Link>
                            <Link to="/auth?mode=signup" className='btn btn-primary'>Signup</Link>
                        </>
                    )}
                </div>

            </div>
         </div>
        </nav>
    );
}

export default Navbar