import React, { Component } from 'react';
import Header from '../components/Header';
import Drinks from '../components/Drinks';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import NewPost from '../components/NewPost';

class PostContainer extends Component {
    state = {
            drinks:[],
            user:[],
            name: '',
            current_city: '',
            editable: true,
            drink: '',
            store: '',
            review_title: '',
            review: '',
            rating: '',
            drink_photo:'',
    
        }
   
     componentDidMount(){
        axios.get(`http://localhost:3001/users/${this.props.match.params.user_id}/drinks`)
            .then((res)=>{
                console.log('drink data:', res.data)
                this.setState({
                    drinks: res.data
                })
            }).then(() => {
                    
            })
        axios.get(`http://localhost:3001/users/${this.props.match.params.user_id}`)
        .then((res)=>{
            console.log('getting one user: ', res.data)
            this.setState({
                user: res.data
            })
        
        })
    }

    onSubmit = () => {
        let currentUser_Id = this.state.drinks.user_id;
        console.log('no user', currentUser_Id)
        const newDrink ={
            drink: this.state.drink,
            store: this.state.store,
            review_title: this.state.review_title,
            review: this.state.review,
            rating: this.state.rating,
            drink_photo: this.state.drink_photo,
        }
        axios.post(`http://localhost:3001/users/${currentUser_Id}/drinks`, newDrink)
            .then(res => {
                console.log('heyyooo new drank:', res.data)
                // this.setState({
                //     drinks: [
                //         ...this.state.drinks,
                //         newDrink: res.data
                //     ]
                // })
            });
    }
    
    render(){
        
        console.log('this is the user', this.state.user);
        return(
            <div>
                <Header />
                <div id="profile" className='container'>
                    <div className="row">
                    <aside className="col-md-4">
                        <img alt="userPic" className="userPic" style={{height: "200px", width:"200px"}} src={this.state.user.avatar}/>
                        <h2>{this.state.user.name}</h2>
                        <h3>{this.state.user.current_city}</h3>
                        <button className="btn btn-info create" data-toggle="modal" data-target="#modal">Create a Review</button>
                        <a href='#'>Find Coffee</a>
                        <a href='#'>Top Rated Coffee</a>
                    </aside>

                    <div className='col-md-8 reviews'>
                       <Drinks drinks={this.state.drinks} />
                    </div>
                    </div>
                </div>
                <NewPost onSubmit={this.onSubmit}  />
            </div>
                     
        )
    }
}

export default PostContainer;