import React from 'react';
// import { Link } from 'react-router-dom';
import sideCup from '../images/sideCup1.jpg';
const Home = () => {
    return (
        <div className="home">
            <img alt="homeImg" className="homeImg" src={sideCup} />

            {/* <!-- Create Acct trigger modal --> */}
            <a className="mLink" data-toggle="modal" data-target="#accountModalLong">
            Create Account
            </a>

            {/* <!-- Create Acct Modal --> */}
            <div className="modal fade" id="accountModalLong" tabindex="-1" role="dialog" aria-labelledby="accountModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="accountModalLongTitle">Create an Account:</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className='acctForm'>
                            <label>Name:</label>
                            <input type='text' name="name" placeholder="Your Name Here"/>
                            <label>Current City:</label>
                            <input type='text' name="location" placeholder="City, State"/>
                            <label>Email:</label>
                            <input type='email' name="username" placeholder="email"/>
                            <label>Password:</label>
                            <input type='password' name="psw" placeholder="..."/>
                            <label>Confirm Password:</label>
                            <input type='password' name="psw" placeholder="..."/>
                        </form>
                    </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                </div>
            </div>
            </div>

            {/* <-- LogIn trigger modal --> */}
            <a className="mLink" data-toggle="modal" data-target="#LogInModalLong">
            LogIn
            </a>

            {/* <!-- LogIn Modal --> */}
            <div className="modal fade" id="LogInModalLong" tabindex="-1" role="dialog" aria-labelledby="LogInModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="LogInModalLongTitle">Please LogIn:</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                     <form className='logForm'>
                        <label>Email:</label>
                        <input type='email' name="username" placeholder="email"/>
                        <label>Password:</label>
                        <input type='password' name="psw" placeholder="..."/>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">LogIn</button>
                </div>
                </div>
            </div>
            </div>

            <div className='title'>
                <h1 className="roast">Roast</h1>
                <h3>A place to espresso yourself.</h3>
                <h5>Create an account or login to give your favorite drinks a latte of love.</h5>
            </div>
        </div>
    );
  };

export default Home;