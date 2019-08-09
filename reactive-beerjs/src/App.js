import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import allBeers from './pages/allBeers';
import randombeer from './pages/randombeer';
import newbeer from './pages/newbeer';
//
//import axios from 'axios';

function App () {
  return (
      <div className="App">
            <Route exact path="/allBeers" component={allBeers} />   
            <Route path="/randombeer" component={randombeer} />
            <Route path="/newbeer" component={newbeer} />
      
        <div class="card mb-3">
          <img src={"images/beers.png"} alt="pictures" /> 
            <div class="card-body">
                <h1 class="card-title">All Beers</h1>
                <p class="card-text">The definition of beer goes something like this: an alcoholic beverage, made from malted cereal grain, flavored with hops, and brewed by slow fermentation. The English word “beer” comes from the Latin “bibere” meaning, “to drink”.</p>
            </div>
          </div>
          <div class="card mb-3">
          <img src={"images/new-beer.png"} alt="pictures" /> 
            <div class="card-body">
                <h1 class="card-title">Random Beer</h1>
                <p class="card-text">The definition of beer goes something like this: an alcoholic beverage, made from malted cereal grain, flavored with hops, and brewed by slow fermentation. The English word “beer” comes from the Latin “bibere” meaning, “to drink”.</p>
            </div>
          </div>
          <div class="card mb-3">
          <img src={"images/random-beer.png"} alt="pictures" /> 
            <div class="card-body">
                <h1 class="card-title">New Beer</h1>
                <p class="card-text">The definition of beer goes something like this: an alcoholic beverage, made from malted cereal grain, flavored with hops, and brewed by slow fermentation. The English word “beer” comes from the Latin “bibere” meaning, “to drink”.</p>
            </div>
          </div>
        </div>

  );
}


export default App;
