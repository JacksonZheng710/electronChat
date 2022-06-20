import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link ,useHistory} from 'react-router-dom';
import { logout } from '../actions/auth';
// import { useSelector } from 'react-redux';
export default function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(({auth})=> auth.user)
  // const message = useSelector(state => state.message)

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
          {/* {message} */}
        </div>
        <div className="chat-navbar-inner-right">
          {/* <span className="logged-in-user">Hi User</span> */}
          {/* <button
            onClick={() => {}}
            className="btn btn-sm btn-outline-danger ml-2">Logout</button>
          <button
            onClick={() => {}}
            className="btn btn-sm btn-outline-success ml-2">Login</button> */}
          {/* <Link
             to="/register"
            className="btn btn-outline-danger ml-2">Register</Link> */}
          <Link
            to="/"
            className="btn btn-outline-success ml-2">Login</Link>
          { user &&
            <>
              <img className="avatar mr-2 " src={user.avatar}></img>
              <span className="logged-in-user">Hi, {user.username}</span>
              <button
                onClick={() => dispatch(logout())}
                className="btn btn-outline-danger ml-4">Logout
              </button>
            </>
          }
        </div>
      </nav>
    </div>
  )
}