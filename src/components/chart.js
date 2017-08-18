import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

class Chart extends Component {
  average() {
    return (
      _.round(_.sum(this.props.data) / this.props.data.length)
    )
  }

  render() {
    return (
      <div>
        <Sparklines data={this.props.data} width={300} height={300}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{this.average.bind(this)()}</div>
      </div>
    );
  }
}

export default Chart;