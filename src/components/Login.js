import React, {Component} from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import {Link} from 'react-router-dom';


class Login extends Component {
	state = {
		email: '',
		password: '',
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const userData = {
			email: this.state.email,
			password: this.state.password,
		}

		axios.post('http://localhost:3001/login', userData)
		  .then(res => {
		  	const { token } = res.data;
		  	// save to localStorage
		  	localStorage.setItem('jwtToken', token); 
		  	// set token to Auth Header
		  	setAuthToken(token);
		  	// Decode token to get user data
		  	const decoded = jwt_decode(token);
		  	// Set current user
              this.props.setCurrentUser(decoded);
              
		  	this.props.history.push(`/roast/users/${this.props.currentUser.id}/drinks`);
		  })
		  .catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<div className="col-lg-12">
                <h4>Log In: </h4>
                <form className='logForm' onSubmit={this.handleSubmit}>
                        <label>Email:</label>
                        <input id="username" type="email" name="email" value={this.state.email} onInput={this.handleChange} />
                        <label>Password:</label>
			            <input id="password" type="password" name="password" value={this.state.password} onInput={this.handleChange} />
                    
                    <button type='submit' className="btn btn-info">Login</button>
                    <p className="PLink"><Link to='/register'>New to Roast? Register Now!</Link></p>
                </form>
			    </div>
			</div>
		);
	}
}

export default Login;