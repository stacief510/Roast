import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import sideCup from '../images/sideCup1.jpg';
import Header from '../components/Header';

class Home extends Component {
	state = {
		users: ''
    }

    componentDidMount() {
		axios.get('http://localhost:3001/users')
		  .then(res => this.setState({users: res.data}))
		  .catch(err => console.log(err));
	}

	render() {
        let result = this.state.users 
		? this.state.users.map(user => {
			return (
				<div key={user._id} className="home">
                    <Link to={`/roast/users/${user._id}/drinks`}>
                    </Link>
				</div>
				 )
          })
        : <h4>Loading...</h4>
    return (
        <div className="home">
            <img alt="homeImg" className="homeImg" src={sideCup} />
            <Header />
            {result}
            <div className='title'>
                <h1 className="roast">Roast</h1>
                <h3>A place to espresso yourself.</h3>
                <h5>Create an account or login to give your favorite drinks a latte of love.</h5>
            </div>
        </div>
    );
  };
}
export default Home;