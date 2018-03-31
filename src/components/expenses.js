import React, {Component} from 'react';
import {
    ComposedChart,
    VerticalComposedChart,
    LabelList,
    BarChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Cell,
    Label
} from 'recharts';

const data = [
    {
        name: 'A',
        percent: 22,
        percentStr: '22%',
        color:'red',
        description:'lorem lorem lorem'
    },  {
        name: 'B',
        percent: 18,
        percentStr: '18%',
        color:'yellow',
        description:'lorem lorem lorem'
    },
    {
        name: 'C',
        percent: 92,
        percentStr: '92%',
        color:'black',
        description:'lorem lorem lorem'
    },
    {
        name: 'D',
        percent: 76,
        percentStr: '76%',
        color:'brown',
        description:'lorem lorem lorem'
    }
];

class Expenses extends Component {
    render() {
        return (
            <BarChart 
            width={800} 
            height={400} 
            data={data} 
            layout="vertical"
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            <XAxis hide="false" type="number"/>
            <YAxis hide="false" type="category" dataKey="name" />
            <Bar dataKey="percent" fill="#8884d8">
            {
                data.map((entry, index) => {
                    const color = entry.color;
                    return <Cell fill={color} />;
                })
            }
            <LabelList dataKey="name" position="top" />
            <LabelList dataKey="percentStr" position="right" />
            </Bar>
          </BarChart>
        );
    }
}

export default Expenses;