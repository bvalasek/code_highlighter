import React from "react";

const data = [
    { date: '2022-01-01', amount: 10, completion_status: true },
    { date: '2022-01-02', amount: 20, completion_status: false },
    { date: '2022-01-03', amount: 30, completion_status: true },
    { date: '2022-01-05', amount: 50, completion_status: false },
    { date: '2022-01-06', amount: 60, completion_status: true },
];

const Loop_through_range = ({ }) => {
    const start_date = new Date('2022-01-01');
    const end_date = new Date('2022-01-07');

    // console.log();
    for (let date = start_date; date <= end_date; date.setDate(date.getDate() + 1)) {
        const dataForDay = data.filter(d => d.date === date.toISOString().slice(0, 10));
        console.log(start_date)
        if (dataForDay.length > 0) {
            console.log(`${date.toISOString().slice(0, 10)}: ${JSON.stringify(dataForDay)}`);
            // return <div>some data</div>
        } else {
            console.log(`${date.toISOString().slice(0, 10)}: no data for this day`);
            // return (<div>no data</div>)
            // return 'no data'
        }
    }
};

export default Loop_through_range;





