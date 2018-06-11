import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) =>{

            return(
                <div>
                    <header>
                        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                                <a className="navbar-brand roast" href="/roast">ROAST</a>
                            { props.isAuthed
                                
                             ? <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                    <a className="nav-link" href="/register">Create an Account</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link active" href="/login">Log In</a>
                                    </li>
                               </ul>
                            : 
                              <ul className="navbar-nav mr-auto">
                                    <li className="nav-item disabled">
                                    <Link className="nav-link" to={`/roast/users/:user_id/drinks`}>Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/roast/find">Find Coffee</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/roast" onClick={props.handleLogout}>Log Out</a>
                                    </li>
                                </ul>
                            }
                         </nav>
                    </header>
                </div>
            )
        
        
}


export default Header;