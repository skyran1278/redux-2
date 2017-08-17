import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
  renderWeather(cityData, key) {
    return (
      <tr key={key} >
        <td>{cityData.city.name}</td>
        <td>
          <Sparklines data={cityData.list.map((weather) => weather.main.temp)} width={180} height={120}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </td>
        <td>
          <Sparklines data={cityData.list.map((weather) => weather.main.temp)} width={180} height={120}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
        <td>
          <Sparklines data={cityData.list.map((weather) => weather.main.temp)} width={180} height={120}>
            <SparklinesLine color="yellow" />
          </Sparklines>
        </td>
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