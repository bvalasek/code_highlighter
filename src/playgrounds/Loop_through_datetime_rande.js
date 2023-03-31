import React from "react";

const data = [
    { date: '2022-01-01 12:00:00', amount: 10, completion_status: true },
    { date: '2022-01-01 13:00:00', amount: 20, completion_status: true },
    { date: '2022-01-02 12:00:00', amount: 30, completion_status: false },
    { date: '2022-01-03 12:00:00', amount: 40, completion_status: true },
];

const records = [
    {
        doneAt: "2022-10-31T01:23:00.000Z",
        message: "Record 1",
        isDone: true
    },
    {
        doneAt: "2022-10-31T02:23:00.000Z",
        message: "Record 2",
        isDone: true
    },
    {
        doneAt: "2022-11-01T01:23:00.000Z",
        message: "Record 3",
        isDone: false
    },
    {
        doneAt: "2022-11-01T02:23:00.000Z",
        message: "Record 4",
        isDone: true
    },
    {
        doneAt: "2022-11-21T02:23:00.000Z",
        message: "Record 2",
        isDone: true
    },
];

const Loop_through_datetime_rande = ({ }) => {
    const groupedRecords = records.reduce((acc, record) => {
        const date = new Date(record.doneAt).toLocaleDateString();
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(record);
        return acc;
    }, {});

    // console.log(groupedRecords);

    const recordsWithTotalItems = Object.entries(groupedRecords).map(([date, records]) => ({
        date,
        records,
        hasData: true,
        totalItems: records.length
    }));

    // adding check if there is data for each day, if not add object for new day into array and push new properties to it

    const firstDate = new Date(records[0].doneAt);
    const lastDate = new Date(records[records.length - 1].doneAt);

    const dates = [];

    for (let date = firstDate; date <= lastDate; date.setDate(date.getDate() + 1)) {
        dates.push(new Date(date).toLocaleDateString());
    }

    console.log(dates);

    dates.forEach(date => {
        if (!groupedRecords[date]) {
            recordsWithTotalItems.push({
                date,
                records: [],
                hasData: false,
                totalItems: 0
            });
        }
    });

    // console.log(typeof (dates));

    const obj = recordsWithTotalItems.sort((a, b) => new Date(b.date) > new Date(a.date))

    console.log(obj);
    // console.log(new Date(recordsWithTotalItems[1].date));

    // const groupedData = data.reduce((acc, curr) => {
    //     const date = curr.date.split(' ')[0];
    //     if (!acc[date]) {
    //         acc[date] = [];
    //     }
    //     acc[date].push(curr);
    //     return acc;
    // }, {});

    // const result = Object.entries(groupedData).map(([date, items]) => {
    //     const totalAmount = items.reduce((sum, item) => sum + item.amount, 0);
    //     return {
    //         date,
    //         totalAmount,
    //         hasData: true,
    //         items,
    //     };
    // });

    // const startDate = new Date('2022-01-01');
    // const endDate = new Date('2023-01-01');
    // for (let d = startDate; d < endDate; d.setDate(d.getDate() + 1)) {
    //     const dateStr = d.toISOString().split('T')[0];
    //     if (!groupedData[dateStr]) {
    //         result.push({
    //             date: dateStr,
    //             totalAmount: null,
    //             hasData: false,
    //             items: [],
    //         });
    //     }
    // }

    // console.log(JSON.stringify(result));
};

export default Loop_through_datetime_rande;
