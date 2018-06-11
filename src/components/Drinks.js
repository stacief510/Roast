import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Drinks extends Component{
    
    render(){

        let result = this.props.drinks.map((drink, idx) => {
            return(
                        <div className='drinksList' key={idx}>
                            <div className="review row">
                                <div className="col-md-4">
                                    <img alt="drinkPic" className="drinkPic" src={drink.drink_photo}/>
                                </div>
                                <div className="col-md-8">
                                    <h3> Drink: <Link to={`/roast/users/${drink.user_id}/drinks/${drink._id}`}>{drink.name}</Link></h3>
                                    <h4> Store: {drink.store} </h4>
                                    <h4> Title: {drink.review_title} </h4>
                                    <h4> Review: {drink.review} </h4>
                                    <h4> Rating: {drink.rating} </h4>
                                </div>
                            </div>
                        </div>
            )
        })
        return( 
            <div>
                 {result}
            </div>
        )
    }
}

export default Drinks;