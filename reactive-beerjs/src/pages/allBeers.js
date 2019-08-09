import React, {Component} from "react";
//import {Link} from "react-router-dom" 
import axios from 'axios';
import Nav from '../components/Nav';

class allBeers extends Component {
    constructor() {
      super();
      this.state = {
        allbeers: [ ]
      }
    }
  
    componentDidMount() {
      axios.get("https://ih-beers-api.herokuapp.com/beers")
      .then(response => {
          this.setState({allbeers: response.data})
      })
  }
  render() {
      return (
       <div>
       <Nav />
         { this.state.allbeers.map(beer =>
         <div className="beer-list">
            <img src={beer.image_url} alt="pictures" /> 
            <div className="details">
              <h2>{beer.name}</h2>
              <h4>{beer.tagline}</h4>
              <p><b>Created by: </b>{beer.name}</p>
            </div>
         </div>
         )}
       </div>
       
      )
    }
  }
  
  
  export default allBeers;


