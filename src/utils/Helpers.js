const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const getFullTime = (timestamp) => {
    dateTime = new Date(timestamp);
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();

    let ampm = 'pm';
    if (hours < 12) {
        ampm = 'am';
    }
    let hh = hours;
    if (hours > 12) {
        hh = hours - 12;
    }
    let mm = minutes;
    if (minutes < 10) {
        mm = '0' + minutes;
    }
    const time = hh + ':' + mm + ampm;
    // Sat Sep 30 2017 at 10.42pm
    return dateTime.toDateString() + ' at ' + time;
}

export const getTime = (timestamp) => {
    let dateTime = new Date(timestamp);
    const month = dateTime.getMonth();
    const date = dateTime.getDate();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();

    let ampm = 'pm';
    if (hours < 12) {
        ampm = 'am';
    }
    let hh = hours;
    if (hours > 12) {
        hh = hours - 12;
    }
    let mm = minutes;
    if (minutes < 10) {
        mm = '0' + minutes;
    }
    const time = hh + ':' + mm + ampm;
    const nowDate = new Date();
    const nowStamp = (nowDate).getTime();
    const diff = nowStamp - timestamp;
    const diffInMins = diff / (1000 * 60);

    // 20 mins
    if (diffInMins < 60) {
        return Math.ceil(diffInMins) + ' mins ago';
    }

    // 1 hour ago
    if (Math.floor(diffInMins / 60) == 1) {
        return '1 hour ago';
    }

    // 16 hours ago
    if (diffInMins < 1440) {
        return Math.floor(diffInMins / 60) + ' hours ago';
    }

    // yesterday at 10.42pm
    if (diffInMins < 2880) {
        return 'yesterday at ' + time;
    }

    // x days ago  (x up to 6)
    if (diffInMins < 10080) {
        return Math.floor(diffInMins / 1440) + ' days ago';
    }

    // Oct 3 at 10.42pm
    if (dateTime.getFullYear() == nowDate.getFullYear()) {
        return monthNames[month] + ' ' + date + ' at ' + time;
    }

    // Tue Mar 01 2016 at 9:48am
    return getFullTime(timestamp);

}