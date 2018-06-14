import React, {Component} from 'react';

class NewPost extends Component {
	state = {
		drink: '',
		store: '',
		review_title: '',
		review: '',
		rating: '',
		drink_photo: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
		console.log(e.target.name + ': ' + e.target.value)
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state);
	}

	closeModal(){
		document.getElementById("modal").click();
		
	}

	render(){
		return(
			<div>
				<div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
						<form className='newPostForm' onSubmit={(e) => this.handleSubmit(e)}>
								<div className="modal-header">
										<h5 className="modal-title" id="modalTitle">Espresso Yourself:</h5>
										<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
										</button>
								</div>
								<div className="modal-body">
									
											<label>Name of Drink:</label>
											<input type='text' name="drink" placeholder="Drink Name Here" required value={this.state.drink} onChange={this.handleChange}/>
											<label>Store:</label>
											<input type='text' name="store" placeholder="Store Name Here" required value={this.state.store} onChange={this.handleChange}/>
											<label>Review Title:</label>
											<input type='text' name="review_title" placeholder="Title Your Review" required value={this.state.review_title} onChange={this.handleChange}/>
											<label>Review:</label>
											<textarea className="textarea" wrap="hard" type='area' name="review" required value={this.state.review} onChange={this.handleChange} />
											<label>Rating:</label>
											<input type='number' min="1" max="5" name="rating" placeholder="Rate this drink: 1 - 5. 5 being the best!" required value={this.state.rating} onChange={this.handleChange}/>
											<label>Add a Photo:</label>
											<input type='text' name="drink_photo" placeholder="url of photo" value={this.state.drink_photo} onChange={this.handleChange}/>
									
								</div>
								<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
										<button type="submit" className="btn btn-primary" disabled={this.state.rating>5} onClick={this.closeModal}>Save</button>
								</div>

							</form>
						</div>
					</div>
				</div>
			</div>
			)
	}
}
export default NewPost;