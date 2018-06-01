import React, { Component } from 'react';
import Titles from './components/Titles';
import City from './components/City';
import logo from './logo.svg';
import './App.css';
import arrowsright from './img/arrows-right.png';
import arrowsleft from './img/arrows-left.png';

class App extends Component {
 state = {
  id: undefined,
  name: undefined,
  description: undefined,
  main_image: undefined,
  temperature: undefined,
  country: undefined,
 }

  getdata = async (e) => {
    e.preventDefault();
    const api_call =  await fetch('https://recruitment.theasiadev.com/Cities/getCitySlider');//perform api get
    const data =  await api_call.json();
    //assign values from api
    this.setState({
      id: data.cities[0].id,
      name: data.cities[0].name,
      description: data.cities[0].description,
      main_image: data.cities[0].main_image,
      temperature: "32C",
      country: "Thailand"
    });
  
}

prev(){
 
}

next(){
    
}
  render() {
    return (
      <div>
      <div class="w3-animate-top">
        <div className ='wrapper'>
          <div className = 'main'>
                  <Titles getdata={this.getdata} />
                  <City
                    name={ this.state.name}
                    description={this.state.description}
                    main_image={this.state.main_image}
                    temperature={this.state.temperature}
                    country={this.state.country}
                  />
                  { this.state.description && <img src={arrowsleft} id='prev' class="w3-animate-left" onClick= {this.prev}/>}
                  { this.state.description && <img src={arrowsright} id="next" class="w3-animate-right" onClick= {this.next}/>}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
