export default {
    /**
     *Date对象转化为yyyy-MM-dd格式
     */
    dateFormat(dateObj) {
        var year = dateObj.getFullYear();
        var month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
        var day = ("0" + dateObj.getDate()).slice(-2);
        return year + "-" + month + "-" + day;
    },
    /**
     *特殊事件格式2019-01-03T00:18:21.000+0000转化成正常格式
     */
    renderTime(date) {
        var dateee = new Date(date).toJSON();
        return new Date(+new Date(dateee) + 8 * 3600 * 1000)
            .toISOString()
            .replace(/T/g, " ")
            .replace(/\.[\d]{3}Z/, "")
            .toLocaleString();
    },
}