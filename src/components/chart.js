import React from 'react';
import { Chart } from 'react-google-charts';


class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        title: "Title",
        pieHole: 0.4
      },
    };
  }
  render() {
    return (
      <Chart
        chartType="PieChart"
        graph_id="PieChart"
        data={[["Task","Expenses"],["Water",100],["Meat",270],["Milk",500],["Salt",100],["Bacon",120]]}
        width={'100%'}
        height={'400px'}
      />
    );
  }
}
export default PieChart;