/**
 * @desc 用于格式化各种数据, 如从后台拿到timestamp, 需要转换成年月日等...
 */

/**
 * time 毫秒数
 * formatter 期望格式  支持格式：YYYY-MM-DD HH:MM:SS YYYY-MM-DD HH:MM YYYY-MM-DD
 * 不传参数返回今天的时间
 * */
export function formatterDate(time, formatter = 'YYYY-MM-DD') {
  let date = new Date();

  if(time) {
    date.setTime(time);
  }else {
    return '';
  }

  let year = date.getFullYear();
  let month = addZero(date.getMonth() + 1);
  let day = addZero(date.getDate());
  let h = addZero(date.getHours());
  let m = addZero(date.getMinutes());
  let s = addZero(date.getSeconds());

  let dateStr = '';
  if (formatter === 'YYYY-MM-DD HH:MM:SS') {
    dateStr = `${year}-${month}-${day} ${h}:${m}:${s}`;
  } else if (formatter === 'YYYY-MM-DD HH:MM') {
    dateStr = `${year}-${month}-${day} ${h}:${m}`;
  } else if (formatter === 'YYYY-MM-DD') {
    dateStr = `${year}-${month}-${day}`;
  }

  return dateStr;
}

/* 补零 */
function addZero(num) {
  let str = '';
  if (num < 10) {
    str = '0' + num;
  } else {
    str = '' + num;
  }

  return str;
}

export function numToWord(num) {
  let word = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

  return word[num];
}

export function formatterTime(str) {
  let arr = str.split('-');

  return Date.parse(arr.join('/'));
}