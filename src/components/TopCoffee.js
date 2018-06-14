import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import axios from 'axios';

class TopCoffee extends Component {
    state ={
        drinks: [],
    }
    componentDidMount(){
        axios.get(`http://localhost:3001/drinks`)
            .then((res)=>{
                console.log('drink data:', res.data)
                this.setState({
                    drinks: res.data
                })
            }).then(() => {
                    
            })
    } 
    
    render(){  
        
        let result = this.state.drinks.map((drink, idx) => {
            if (drink.rating === 5){
    
                return(
                            <div className='drinksList2' key={idx}>
                                <div className="review row">
                                    <div className="col-md-4">
                                        <img alt="drinkPic" className="drinkPic" src={drink.drink_photo}/>
                                    </div>
                                    <div className="col-md-8">
                                        <h3> Drink: <Link to={`/roast/users/${drink.user_id}/drinks/${drink._id}`}>{drink.drink}</Link></h3>
                                        <h4> Store: {drink.store} </h4>
                                        <h4> Title: {drink.review_title} </h4>
                                        <h4> Review: {drink.review} </h4>
                                        <h4> Rating: {drink.rating} </h4>
                                    </div>
                                </div>
                            </div>
                )
            }
        }) 
        return(
            <div className="topRated">
                <Header/>
                <h1 className="topCoffee" >Top Rated Coffee</h1>
               {result}
            </div>
        )
    }
}

export default TopCoffee;