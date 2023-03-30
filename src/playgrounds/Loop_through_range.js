import React from "react";

// USE FORMAT
// 2022-10-31T01:23:00.000Z

// z MongoDB
// 
// doneAt
// 2022-12-29T01:01:00.000+00:00



const data_wO_time = [
    { date: '2022-01-01', amount: 10, completion_status: true },
    { date: '2022-01-02', amount: 20, completion_status: false },
    { date: '2022-01-03', amount: 30, completion_status: true },
    { date: '2022-01-03', amount: 30, completion_status: true },
    { date: '2022-01-05', amount: 50, completion_status: false },
    { date: '2022-01-06', amount: 60, completion_status: true },
];

const data_w_time = [
    { date: '2022-01-01T01:23:00.000', amount: 10, completion_status: true },
    { date: '2022-01-02T02:34:00.000', amount: 20, completion_status: false },
    { date: '2022-01-03T05:01:00.000', amount: 30, completion_status: true },
    { date: '2022-01-05T06:12:00.000', amount: 50, completion_status: false },
    { date: '2022-01-06T23:23:00.000', amount: 60, completion_status: true },
];

const data = data_wO_time;

const Loop_through_range = () => {
    const start_date = new Date('2022-01-01');
    const end_date = new Date('2022-01-07');

    // console.log();
    for (let date = start_date; date <= end_date; date.setDate(date.getDate() + 1)) {
        // const d = new Date()
        // const dataForDay = data.filter(d => d.date === date.toISOString().slice(0, 10));
        // const dataForDay = data.filter(d => d.date == date.toISOString().slice(0, 10));
        // console.log(date.toISOString().slice(0, 10))
        console.log(date.toISOString().slice(0, 10))
        console.log(data_w_time.filter(
            function (el) {
                return el.date >= '2022-01-01'
            }
        ), date)

        // console.log(data_wO_time.filter(d => d.date === date.toISOString().slice(0, 10)))
        // console.log(data_w_time.filter(d => d.date === date.toISOString().slice(0, 10)))

        // console.log(JSON.stringify(data_w_time))
        // if (dataForDay.length > 0) {
        //     console.log(JSON.stringify(dataForDay));
        //     // return <div>some data</div>
        // } else {
        //     console.log(`no data for this day`);
        //     // return (<div>no data</div>)
        //     // return 'no data'
        // }
    }
};

export default Loop_through_range;





