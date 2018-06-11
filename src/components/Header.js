import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) =>{

   
        if(props.isAuthenticated){
            return(
                <div>
                    <header>
                        <nav>
                            <a href="/register">Create an Account</a>
                            <a href="/login">Log In</a>
                         </nav>
                    </header>
                </div>
            )
        }else{
                return(
                <div>
                    <header>
                        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                                <a className="navbar-brand roast" href="/roast">ROAST</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                    <Link className="nav-link" to={`/roast/users/user_id/drinks`}>Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/roast/find">Find Coffee</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link disabled" href="/roast" handleLogout={props.handleLogout}>Log Out</a>
                                    </li>
                                </ul>
                            </div>
                         </nav>
                    </header>
                </div>
            )
        }
        
}


export default Header;