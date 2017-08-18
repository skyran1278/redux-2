import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './../components/chart';
import GoogleMap from './../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData, key) {
    const temps = cityData.list.map((weather) => weather.main.temp)
    const pressures = cityData.list.map((weather) => weather.main.pressure)
    const humidities = cityData.list.map((weather) => weather.main.humidity)
    const { lon, lat } = cityData.city.coord

    return (
      <tr key={key} >
        <td><GoogleMap lat={lat} lon={lon} ></GoogleMap></td>
        <td><Chart data={temps} color='orange' ></Chart></td>
        <td><Chart data={pressures} color='blue' ></Chart></td>
        <td><Chart data={humidities} color='red' ></Chart></td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);