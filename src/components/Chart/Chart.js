import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPoints = [
        {label:'Jan', value: 0},
        {label:'Feb', value: 0},
        {label:'Mar', value: 0},
        {label:'Apr', value: 0},
        {label:'May', value: 0},
        {label:'Jun', value: 0},
        {label:'Jul', value: 0},
        {label:'Aug', value: 0},
        {label:'Sep', value: 0},
        {label:'Oct', value: 0},
        {label:'Nov', value: 0},
        {label:'Dec', value: 0},
    ]
    
    return <div className="chart">
        {
            dataPoints.map(dataPoint => {
               return <ChartBar
                    key={dataPoint.label}
                    label = {dataPoint.label}
                    maxValue = {null}
                    value={dataPoint.value}
                />
            })
        }
    </div>
};

export default Chart;