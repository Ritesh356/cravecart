import { Chart } from "react-google-charts";

const Charts = () => {
    const data = [
        ["month", "total sale"],
        ["January", 900000],
        ["February", 200000],
        ["March",300000],
        ["April",400000],
        ["May", 600000],
    ];

    const options = {
        title: "Monthly Report",
        'backgroundColor':'transparent'
    };
    return (
        <>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"300px"}
            />
        </>
    )
}

export default Charts;