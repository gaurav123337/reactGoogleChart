import React, { Component }  from 'react';
import { connect } from 'react-redux';
import ChartComponent from './chart-component';
import GoogleMapComponent from './google-map-component';


class WeatherListComponent extends React.Component{
    renderWeather(weatherCity){
        const name= weatherCity.city.name;
        const temp = weatherCity.list.map((weather) => {
            return (weather.main.temp);
        });
        const humidity = weatherCity.list.map((weather) => {
            return (weather.main.humidity);
        });
        const pressure = weatherCity.list.map((weather) => {
            return (weather.main.pressure);
        });
        const {lon, lat} = weatherCity.city.coord;

        console.log(temp);
        return(
            <tr key={name}>

                <td><GoogleMapComponent lon={lon} lat={lat} /></td>
                <td >
                    <ChartComponent data={temp} color="orange" />
                </td>
                <td >
                    <ChartComponent data={pressure} color="green" />
                </td>
                <td >
                    <ChartComponent data={humidity} color="blue" />
                </td>
            </tr>
        )
    }
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.weather.map(this.renderWeather)
                    }
                </tbody>

            </table>
        )
    }
}

function mapStateToProps(state){
    return { weather: state.weather };
}

export default connect(mapStateToProps) (WeatherListComponent);