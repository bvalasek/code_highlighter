import React from "react";

const records = [
    { doneAt: "2022-10-31T01:23:00.000Z", message: "Record 1", isDone: true },
    { doneAt: "2022-10-31T02:23:00.000Z", message: "Record 2", isDone: false },
    { doneAt: "2022-11-01T03:23:00.000Z", message: "Record 3", isDone: true },
    { doneAt: "2022-11-04T04:23:00.000Z", message: "Record 4", isDone: false },
    { doneAt: "2022-11-04T03:23:00.000Z", message: "Record 3", isDone: true },
    { doneAt: "2022-11-07T04:23:00.000Z", message: "Record 4", isDone: false },
];

const List_records_with_times_between_groups = ({ }) => {
    const groupedRecords = records.reduce((acc, record) => {
        const date = new Date(record.doneAt).toLocaleDateString();
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(record);
        return acc;
    }, {});

    console.log(groupedRecords);


    const groupedRecordsWithTimeDiff = Object.entries(groupedRecords).reduce((acc, [date, records], index, arr) => {
        const prevRecords = arr[index - 1] ? arr[index - 1][1] : [];
        const nextRecords = arr[index + 1] ? arr[index + 1][1] : [];
        const prevLastRecord = prevRecords[prevRecords.length - 1];
        const nextFirstRecord = nextRecords[0];
        const prevLastRecordTime = prevLastRecord ? new Date(prevLastRecord.doneAt).getTime() : null;
        const nextFirstRecordTime = nextFirstRecord ? new Date(nextFirstRecord.doneAt).getTime() : null;
        const currFirstRecordTime = new Date(records[0].doneAt);
        const currLastRecordTime = new Date(records[records.length - 1].doneAt);

        // check duration between last item of previous group and first item of next group,
        // if the time is longer than a day, than insert new object to the array
        if (prevLastRecordTime && currFirstRecordTime - prevLastRecordTime > 86400000) {
            // calculate expected next day, just to check if next value is on next day date,
            // if so, we will set days_between: 0
            var someDate = new Date(prevLastRecordTime);
            someDate.setTime(someDate.getTime() + (24 * 60 * 60 * 1000));

            // push new object to our array
            acc.push({
                prevItemTime: new Date(prevLastRecord.doneAt),
                nextItemTime: currFirstRecordTime,

                prevItemDate: new Date(prevLastRecord.doneAt).toDateString(),
                nextItemDate: currFirstRecordTime.toDateString(),
                expectedNextDayAfterPrevItemDate: someDate,
                isNextSameAsExpected: someDate.toDateString() === currFirstRecordTime.toDateString(),

                duration: new Date(currFirstRecordTime - new Date(prevLastRecord.doneAt)).getTime(),
                // duration: (currFirstRecordTime - new Date(prevLastRecord.doneAt)) / (1000 * 60 * 60 * 24), // 3.0416666666666665






                // isNextSameAsExpected: someDate.getDate(), // number 2
                // diffDays: Math.ceil(Math.abs(currFirstRecordTime - prevLastRecordTime) / (1000 * 60 * 60 * 24)),
                // nextItemTime: (new Date(currFirstRecordTime - prevLastRecordTime).getDate()) - 1,
                // duration: new Date(currFirstRecordTime).getDate(),
                // duration: (new Date(currFirstRecordTime).toLocaleDateString().getTime - new Date(prevLastRecordTime).toLocaleDateString().getTime) / (1000 * 60 * 60 * 24),
                // new Date().getTime(currFirstRecordTime - prevLastRecordTime),
            });
        }
        acc.push(...records);
        // if (nextFirstRecordTime && nextFirstRecordTime - currLastRecordTime > 86400000) {
        //     acc.push({
        //         previousItemTime: currLastRecordTime,
        //         nextItemTime: nextFirstRecordTime,
        //     });
        // }
        return acc;
    }, []);

    console.log(groupedRecordsWithTimeDiff);
}
export default List_records_with_times_between_groups;
