import React from 'react';
// import { Link } from 'react-router-dom';
import sideCup from '../images/sideCup1.jpg';

const Home = () => {
    return (
        <div className="home">
            <img alt="homeImg" className="homeImg" src={sideCup} />

  


            <div className='title'>
                <h1 className="roast">Roast</h1>
                <h3>A place to espresso yourself.</h3>
                <h5>Create an account or login to give your favorite drinks a latte of love.</h5>
            </div>
        </div>
    );
  };

export default Home;