import React, { Component } from 'react';

class Titles extends Component{
	render(){
		return(
			<div>
				<h1 className="title-container__title" >Where to go? This weeks standout destination are....</h1>
				<div onClick={this.props.getdata}>
					<button>View City</button>
				</div>
			</div>
			);
	}
};

export default Titles;