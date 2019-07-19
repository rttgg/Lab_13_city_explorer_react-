import React, { Component, Fragment } from "react";


import Search from "./Search.js";
import Result from "./Result.js";
import Map from "./Map.js";
import superagent from "superagent";
import Header from "./Header.js";
import Form from "./Form.js";
import { Link } from 'react-router-dom';
//import SearchForm from "./search-form.js";

import '../App.css';
//import SearchForm from "./Search.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backEndUrl: '',
      STATIC_MAP_API_KEY: '',
      googleResults: {},
      apiResults: {
        weathers: [],
        yelp: [],
        hiking: [],
        events: [],
        movies: []
      }
    };
  }


  getApiKey = (value) => {
    this.setState({ STATIC_MAP_API_KEY: value });
    localStorage.setItem('STATIC_MAP_API_KEY', value);
  }

  getBackendUrl = (value) => {
    this.setState({ backEndUrl: value });
  }


  getAllData = async (value) => {
    const googleResults = await superagent.get(this.state.backEndUrl + '/location').query({ data: value })
    console.log(googleResults);
    this.setState({ googleResults: googleResults.body });

    const weathersResults = await superagent.get(this.state.backEndUrl + '/weather').query({ data: googleResults.body });
    const moviesResults = await superagent.get(this.state.backEndUrl + '/movies').query({ data: googleResults.body });
    const trailsResults = await superagent.get(this.state.backEndUrl + '/trails').query({ data: googleResults.body });
    const yelpResults = await superagent.get(this.state.backEndUrl + '/yelp').query({ data: googleResults.body });

    this.setState({
      apiResults: {
        weathers: weathersResults.body,
        movies: moviesResults.body,
        hiking: trailsResults.body,
        yelp: yelpResults.body
      }
    })

  }

  render() {
    console.log(this.state.apiResults);
    return (





      <div className="App">
        {/* <SearchForm>
         
                <Link to="/header">Header</Link>
                <Link to="/map">Map</Link>
                
                </SearchForm> */}
        <Header />

        <Form onClick={this.getApiKey} formName="Maps key"></Form>
        <Form onClick={this.getBackendUrl} formName="Backend Url"></Form>
        <Form onClick={this.getAllData} formName="Search Location"></Form>

        <Map location={this.state.googleResults} />


        {/* weather */}
        <section>
          <h3>Result from the Dark Sky API</h3>
          <ul class="weather-results">
            {this.state.apiResults.weathers.map(weathers => {
              return <li key={weathers.time}>
                The forecast for {weathers.time} is: {weathers.forecast}
              </li>
            })}
          </ul>
        </section>


        {/* yelp */}
        <section class="yelp-container">
          <h3>Reults from the Yelp API</h3>
          <ul class="yelp-results">
            {this.state.apiResults.yelp.map(yelp => {
              return <li>
                <a href="{{ url }}" > {yelp.name}</a>
                <p>The average rating is {yelp.rating} out of 5 and the average cost is {yelp.price} out of 4</p>
                <img src="{ yelp.image_url }"></img>
              </li>
            }
            )}
          </ul>
        </section>

        {/* events
            <section>
              <h3>Results from the Eventbrite API</h3>
              <ul>
              {this.state.apiResults.event.map(event => {
                return <li>
                  <a href="{{ link }}">{ event.name }</a>
                  <p>Event Date: { event.event_date }</p>
                  <p>{ event.summary }</p>
                </li>
        }
        )}   
              </ul>
            </section> */}


        {/* movies */}
        <section>
          <h3>Results from The Movie DB API</h3>
          <ul class="movies-results">
            {this.state.apiResults.movies.map(movies => {
              return <li>
                <p><span>{movies.title}</span> was relased on {movies.released_on}. Out of {movies.total_votes} total votes, {movies.title} has an average vote of {movies.average_votes} and a popularity score of {movies.popularity}.</p>
                {/* <img src="{{ image_url }}"> */}
                <p>{movies.overview}</p>
              </li>
            }
            )}
          </ul>
        </section>


        {/* hiking */}
        <section>
          <h3>Results from the Hiking Project API</h3>
          <ul class="trails-results"></ul>
          {this.state.apiResults.hiking.map(hiking => {
            return <li>
              <p>Hike Name: <a href="{ hiking.trail_url }">{hiking.name}</a>, Location: {hiking.location}, Distance: {hiking.length} miles</p>
              <p>On {hiking.condition_date} at {hiking.condition_time}, trail conditions were reported as: {hiking.conditions}</p>
              <p>This trail has a rating of {hiking.stars} stars (out of {hiking.star_votes} votes)</p>
              <p>{hiking.summary}</p>
            </li>
          })}
        </section>

      </div>
    );
  }

}


export default App;