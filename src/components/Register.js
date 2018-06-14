import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Register extends Component {
	state = {
		name: '',
		email: '',
		current_city: '',
		password: '',
		password2: '',
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.password === this.state.password2) {
			const newUser = {
				name: this.state.name,
                email: this.state.email,
                password: this.state.password,
				current_city: this.state.current_city,
			}

			axios.post('https://roast-backend.herokuapp.com/register', newUser)
			  .then(res => this.props.history.push('/login'))
			  .catch(err => console.log(err));
		}
	}

	render() {
		return (
			<div>
				<div id="register-page" className="row">
					<div className="col-md-12">
					<h4>Register</h4>	
                    <form className='acctForm' method="post" onSubmit={this.handleSubmit} >
                            <label>Name:</label>
                            <input id="users_name" type="text" className="validate" name="name" value={this.state.name} onInput={this.handleChange} />
                            <label>Current City:</label>
                            <input id="user_location" type="text" placeholder="San Francisco, CA" className="validate" name="current_city" value={this.state.current_city} onInput={this.handleChange} />
                            <label>Email:</label>
                            <input id="users_email" type="email" className="validate" name="email" value={this.state.email} onInput={this.handleChange} />
                            <label>Password:</label>
                            <input id="user_passw" type="password" className="validate" name="password" value={this.state.password} onInput={this.handleChange} />
                            <label>Confirm Password:</label>
                            <input id="confirm_pass" type="password" name="password2" value={this.state.password2} onInput={this.handleChange} />
                            <button type ='submit' className="btn btn-info">Register Now</button>
                            <p className="PLink">Already have an account?<Link to='/login'>Log In</Link></p>

                    </form>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;