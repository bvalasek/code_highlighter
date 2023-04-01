import React from "react";

const records = [
    { doneAt: "2022-10-31T01:23:00.000Z", message: "Record 1", isDone: true },
    { doneAt: "2022-10-31T02:23:00.000Z", message: "Record 2", isDone: false },
    { doneAt: "2022-11-01T03:23:00.000Z", message: "Record 3", isDone: true },
    { doneAt: "2022-11-04T04:23:00.000Z", message: "Record 4", isDone: false },
    { doneAt: "2022-11-04T03:23:00.000Z", message: "Record 3", isDone: true },
    { doneAt: "2022-11-07T04:23:00.000Z", message: "Record 4", isDone: false },
];

const List_groups_with_break_groups = ({ }) => {

    const result = records.reduce((acc, cur, index) => {
        const date = cur.doneAt.slice(0, 10);
        const nextDate = null ?? records[index + 1]?.doneAt.slice(0, 10);
        if (!acc[date]) {
            acc[date] = {
                groupRecords: [],
                length: 0,
                firstTime: null,
                lastTime: null,
            };
            acc[`${date}-break`] = {
                startTime: nextDate,

                // startTime: cur.doneAt,
                // startTime: acc[date].valueOf(acc[date]),
                // endTime: acc[date].firstTime = cur.doneAt
            };
        }
        acc[date].groupRecords.push(cur);
        acc[date].length++;
        if (!acc[date].firstTime || cur.doneAt < acc[date].firstTime) {
            acc[date].firstTime = cur.doneAt;
        }
        if (!acc[date].lastTime || cur.doneAt > acc[date].lastTime) {
            acc[date].lastTime = cur.doneAt;
        }
        return acc;
    }, {});

    console.log(result);
    return (
        <>{records.map((record) => <div>{JSON.stringify(record)}<br /><br /></div>)}</>
    )
};

export default List_groups_with_break_groups;
