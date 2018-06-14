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
                user: res.data,
               
            })
        
        })
    }

    onSubmit = (newDrink) => {
        let currentUser_Id = this.state.user._id;
        console.log('currentUserId:', currentUser_Id);
            newDrink.user_id = currentUser_Id;
            axios.post(`http://localhost:3001/users/${currentUser_Id}/drinks`, newDrink)
                 .then(res => {
                    
                    console.log('heyyooo new drank:', res.data.user_id);
                    this.setState({
                        drinks: [
                            ...this.state.drinks,
                            newDrink
                        ]
                    })
            });
    }

    
    render(){
        
        console.log('this is the user', this.state.user);
        return(
            <div>
                <Header drinks={this.state.drinks}/>
                <div id="profile" className='container'>
                    <div className="row">
                    <aside className="col-md-4">
                        <img alt="userPic" className="userPic" style={{height: "200px", width:"200px"}} src={this.state.user.avatar}/>
                        <h2>{this.state.user.name}</h2>
                        <h3>{this.state.user.current_city}</h3>
                        <button className="btn btn-info create" data-toggle="modal" data-target="#modal">Create a Review</button>
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