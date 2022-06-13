import React from 'react';
import { Link ,useHistory} from 'react-router-dom';

export default function Navbar() {
  const history = useHistory();

  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          {/* <a href="/" className="btn btn-outline-success ml-2">Settings</a> */}
          <button
          onClick={()=> history.goBack()}
            className="btn btn-outline-primary">Back
          </button>
          <Link
            to="/settings"
            className="btn btn-outline-success ml-2">Settings
          </Link>
        </div>
        <div className="chat-navbar-inner-right">
          <span className="logged-in-user">Hi User</span>
          {/* <button
            onClick={() => {}}
            className="btn btn-sm btn-outline-danger ml-2">Logout</button>
          <button
            onClick={() => {}}
            className="btn btn-sm btn-outline-success ml-2">Login</button> */}
          <Link
             to="/register"
            className="btn btn-outline-danger ml-2">Register</Link>
          <Link
            to="/login"
            className="btn btn-outline-success ml-2">Login</Link>
        </div>
      </nav>
    </div>
  )
}