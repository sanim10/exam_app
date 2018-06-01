import React, { Component } from 'react';

class City extends Component{

	render(){
		return(
			
			<div className='container'>
				<div > 
					{this.props.main_image && <img id='pic' class="w3-animate-left" src= {this.props.main_image} />}
				</div>
				<div>
					{ this.props.name && this.props.country && <p id='loc' class="w3-animate-right">
					<strong>{this.props.name}, {this.props.country}</strong></p> }
				</div>
				<div className = "col-xs-20">
					{ this.props.description && <p id='des' class="w3-animate-right">{this.props.description}</p>}
					{ this.props.description && <p class="w3-animate-right">Starting from:</p>}
					{ this.props.description && <p id='price' class="w3-animate-right">$14.00</p>}
					{ this.props.description && <button id='tours'class="w3-animate-right">Tours</button>}
					{ this.props.description && <button id='attraction'class="w3-animate-right">Attractions</button>}
					{ this.props.description && <button id='transportation'class="w3-animate-right">Transportation</button>}
					
				</div>
			{ this.props.temperature && <p id = 'temp'>Temperature:{this.props.temperature}</p>}
				
			</div>
			
			);
	}
};

export default City;