export default {
    /**
     *Date对象转化为yyyy-MM-dd格式
     */
    dateFormat(dateObj) {
        var year = dateObj.getFullYear();
        var month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
        var day = ("0" + dateObj.getDate()).slice(-2);
        return year + "-" + month + "-" + day;
    }
}