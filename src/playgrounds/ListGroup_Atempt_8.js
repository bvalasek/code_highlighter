import React from "react";



const records = [
    { doneAt: "2022-10-31T01:23:00.000Z", message: "Record 1", isDone: true },
    { doneAt: "2022-10-31T02:23:00.000Z", message: "Record 2", isDone: false },
    { doneAt: "2022-11-01T03:23:00.000Z", message: "Record 3", isDone: true },
    { doneAt: "2022-11-04T04:23:00.000Z", message: "Record 4", isDone: false },
    { doneAt: "2022-11-04T03:23:00.000Z", message: "Record 3", isDone: true },
    { doneAt: "2022-11-07T04:23:00.000Z", message: "Record 4", isDone: false },
];

const ListGroup_Atempt_8 = ({ }) => {
    const result = {};

    records.forEach((record, index) => {
        const date = record.doneAt.split("T")[0];

        if (!result[date]) {
            result[date] = {
                groupRecords: [],
                length: 0,
                firstTime: null,
                lastTime: null
            };
        }

        if (index > 0) {
            const prevDate = records[index - 1].doneAt.split("T")[0];

            if (prevDate !== date) {
                const breakDate = new Date(records[index].doneAt);
                // breakDate.setDate(breakDate.getDate() + 1);

                result[`${prevDate}-break`] = {
                    startTime: records[index - 1].doneAt,
                    endTime: breakDate.toISOString()
                };
            }
        }

        result[date].groupRecords.push({
            doneAt: record.doneAt,
            message: record.message,
            isDone: record.isDone
        });

        result[date].length++;

        if (!result[date].firstTime || record.doneAt < result[date].firstTime) {
            result[date].firstTime = record.doneAt;
        }

        if (!result[date].lastTime || record.doneAt > result[date].lastTime) {
            result[date].lastTime = record.doneAt;
        }
    });

    console.log(result);
    return (
        <>{records.map((record) => <div>{JSON.stringify(record)}<br /><br /></div>)}</>
    )
};

export default ListGroup_Atempt_8;
