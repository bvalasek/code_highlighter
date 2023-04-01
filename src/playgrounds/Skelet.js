import React from "react";


const Component_name = ({ }) => {

    const records = [
        { doneAt: "2022-10-31T01:23:00.000Z", message: "Record 1", isDone: true },
        { doneAt: "2022-10-31T02:23:00.000Z", message: "Record 2", isDone: false },
        { doneAt: "2022-11-01T03:23:00.000Z", message: "Record 3", isDone: true },
        { doneAt: "2022-11-04T04:23:00.000Z", message: "Record 4", isDone: false },
        { doneAt: "2022-11-04T03:23:00.000Z", message: "Record 3", isDone: true },
        { doneAt: "2022-11-07T04:23:00.000Z", message: "Record 4", isDone: false },
    ];

    const List_groups_with_break_groups = ({ }) => {

        return (
            <>{records.map((record) => <div>{JSON.stringify(record)}<br /><br /></div>)}</>
        )
    };
};

export default Component_name;
