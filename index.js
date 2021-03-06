let timeHelper = {

    /**
     * 时间转化为几天前，几小时前，几分钟前
     * @param dateTimeStamp
     * @returns {*|string}
     */
    getDiffTime: function (dateTimeStamp) {
        let minute = 1000 * 60;
        let hour = minute * 60;
        let day = hour * 24;
        let month = day * 30;
        let year = month * 12;
        let now = new Date().getTime();
        let diffValue = now - dateTimeStamp;
        if (diffValue < 0) {
            return;
        }
        let yearC = diffValue / year;
        let monthC = diffValue / month;
        let weekC = diffValue / (7 * day);
        let dayC = diffValue / day;
        let hourC = diffValue / hour;
        let minC = diffValue / minute;
        let result = '';
        if (yearC >= 1) {
            result = "" + parseInt(yearC) + "年前";
        }
        else if (monthC >= 1) {
            result = "" + parseInt(monthC) + "月前";
        }
        else if (weekC >= 1) {
            result = "" + parseInt(weekC) + "周前";
        }
        else if (dayC >= 1) {
            result = "" + parseInt(dayC) + "天前";
        }
        else if (hourC >= 1) {
            result = "" + parseInt(hourC) + "小时前";
        }
        else if (minC >= 1) {
            result = "" + parseInt(minC) + "分钟前";
        } else {
            result = "刚刚";
        }
        return result;
    },

    //根据毫秒获取此时时间,如2018/04/03 19:10
    getFormatTime(millisecond) {
        let now = new Date(millisecond);
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let date = now.getDate();
        if (date < 10) {
            date = "0" + date;

        }
        let hour = now.getHours();
        if (hour < 10) {
            hour = "0" + hour;
        }
        let minute = now.getMinutes();
        if (minute < 10) {
            minute = "0" + minute;
        }
        let second = now.getSeconds();
        if (second < 10) {
            second = "0" + second;
        }
        return year + "/" + month + "/" + date + " " + hour + ":" + minute;
    },

};

export default timeHelper;