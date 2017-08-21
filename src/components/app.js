import React, { Component } from 'react';
import  SearchBarComponent from './search-bar-component';
import WeatherListComponent from './weather-list-component';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>React simple starter</div>
        <SearchBarComponent />
        <WeatherListComponent />
      </div>
    );
  }
}
