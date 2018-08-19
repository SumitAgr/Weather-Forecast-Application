var React = require('react');
var DayItem = require('./DayItem');
var convertTemp = require('../utils/helpers').convertTemp;

class Detail extends React.Component {
  render() {
    var props = this.props.location.state;
    return (
      <div>
        <DayItem day={props} />
        <div className='description-container'>
          <p><b>{props.city}</b></p>
          <p>{props.weather[0].description}</p>
          <p>Min temp: {convertTemp(props.temp.min)}° F</p>
          <p>Max temp: {convertTemp(props.temp.max)}° F</p>
          <p>humidity: {props.humidity} %</p>
        </div>
      </div>
    )
  }
}

module.exports = Detail;
