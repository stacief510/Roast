import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) =>{
   
            return(
                <div>
                    <header>
                        <div>
                            { props.isAuthed
                                    
                            ? 
                            <nav className="logInNav">
                                    <a  className="homePageLink" href="/register">Create an Account</a>
                                    <a  className="homePageLink" href="/login">Log In</a>
                            </nav>
                            : 
                            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                                    <a className="navbar-brand roast" href="/roast">ROAST</a>
                                <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                        <a className="nav-link" href="/roast/find">Find Coffee</a>
                                        </li>
                                        <li className="nav-item">
                                        <a className="nav-link" href="/roast/topRated">Top Rated Coffee</a>
                                        </li>
                                        <li>
                                        {/* <a className="nav-link" href={`/roast/users/${this.props.user.id}/drinks`}> Profile</a>  */}
                                        </li>
                                        <li className="nav-item">
                                        <a className="nav-link" href="/roast" onClick={props.handleLogout}>Log Out</a>
                                        </li>
                                    </ul>
                                
                            </nav>}
                        </div>
                    </header>
                </div>
            )
        
        
}


export default Header;