import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const maximumValue = Math.max(...dataValues);
    
    return <div className="chart">
        {
            props.dataPoints.map(dataPoint => {
               return <ChartBar
                    key={dataPoint.label}
                    label = {dataPoint.label}
                    maxValue = {maximumValue}
                    value={dataPoint.value}
                />
            })
        }
    </div>
};

export default Chart;