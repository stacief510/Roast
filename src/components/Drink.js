import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';

class Drink extends Component {
   state={
       drinks: [],
       editable: true
   }

    componentDidMount = () => {
        let oneUser = this.props.match.params.user_id;
        let oneReview = this.props.match.params.drink_id;
        axios.get(`http://localhost:3001/users/${oneUser}/drinks/${oneReview}`)
        .then((res)=>{
            console.log("Drink Response :", res)
            this.setState({
                drinks: res.data,
                user_id: this.props.match.params.user_id
            })

        }); 
    }
    onDelete = () => {
        let oneUserId = this.props.match.params.user_id;
        let oneReviewId = this.props.match.params.drink_id;
        console.log('oneuserid', oneUserId);
        console.log('drinkId', oneReviewId);
        axios.delete(`http://localhost:3001/users/${oneUserId}/drinks/${oneReviewId}`, {data: {id: oneReviewId}})
            .then(res => {
                this.props.history.push(`/roast/users/${oneUserId}/drinks`);
            })

    }

    onEdit=()=>{
        console.log("EDIT CLICK STATE: ",this.state.drinks)
        this.setState({
            ...this.state.drinks,
            editable: false
        })
    }
    
    handleChange=(event)=>{
        const value = event.target.value;
        this.setState({drinks: {
            ...this.state.drinks,
            [event.target.name]: value
        }});
    }


    onSubmit=(event)=>{
        event.preventDefault();
        const test = this.state.drinks;
        console.log("EDIT SUBMISSION: ", test)
        let oneUserId = this.props.match.params.user_id;
        let oneReviewId = this.props.match.params.drink_id;
        // console.log("EDIT SUBMISSION: ", test)
        axios.put(`http://localhost:3001/users/${oneUserId}/drinks/${oneReviewId}`, test)
            .then(res => {
                let updatedDrink = res.data;
                console.log('this is data', updatedDrink)
                this.setState({ 
                    drinks: updatedDrink,
                    editable: true
                
                })
            });
            // console.log('123', this.state.drinks);
    }


    render(){
        console.log("STATE Drink :", this.state.drinks)
        if(this.state.editable && this.state.drinks){
            return(
                <div className="container showOne">
                    <Header />
                    <div className="row">
                    <img alt="coffeePic" className="col-md-4" style={{height: "300px", width:"200px"}}
                        src={this.state.drinks.drink_photo} />
                    <div className="singleReview col-md-8" data-drink-index= {this.props.match.params.drink_id} >
                        <h2>
                        Drink: {this.state.drinks.drink} 
                        </h2>
                        <h4>
                        Store: {this.state.drinks.store} 
                        </h4>
                        <h4>
                        Title: {this.state.drinks.review_title}
                        </h4>
                        <h4>
                        Review: { this.state.drinks.review}
                        </h4>
                        <h4>
                        Rating: {this.state.drinks.rating} 
                        </h4>
                        <button className="btn btn-info" type="delete" onClick={this.onDelete}>Delete Post</button>
                        <button className="btn btn-info" type="edit" onClick={this.onEdit}>Edit Post</button>
                        <Link to={`/roast/users/${this.props.match.params.user_id}/drinks`} className="btn btn-info">Back to Profile</Link>
                    </div>
                    </div>
                </div>
            )
        }
        else{
            return(
            <div className="updateDrinkForm">
                <form className="form-group" onSubmit={this.onSubmit}>
                    <label>Drink:</label>
                    <input className="form-control" name="name" onChange={this.handleChange} type="text"  value={this.state.drinks.name}/>
                    <label>Store:</label>
                    <input className="form-control" name="store" onChange={this.handleChange} type="text"  value={this.state.drinks.store}/>
                    <label>Title:</label>
                    <input className="form-control" name="review_title" onChange={this.handleChange} type="text" value={this.state.drinks.review_title}/>
                    <label>Review:</label>
                    <input className="form-control" name="review" onChange={this.handleChange} type="text" value={this.state.drinks.review}/>
                    <label>Rating:</label>
                    <input className="form-control" name="rating" onChange={this.handleChange} type="text" value={this.state.drinks.rating}/>
                    <button className="btn btn-info" type="submit" >Save Event</button>
                </form>
            </div>
            )
        }
    }
}

export default Drink;

