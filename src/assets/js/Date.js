/**
 * Created by Administrator on 2018/6/21.
 */
let date1=new Date();
let fmtDate='';
export function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      fmtDate=new Date(fmt).getTime();
    }
  }
  let diffValue = date1.getTime() - fmtDate;
  if(diffValue < 0){
    若日期不符则弹出窗口告之
    alert("结束日期不能小于开始日期！");
  }
  let minute = 1000 * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let halfamonth = day * 15;
  let month = day * 30;
  let monthC =diffValue/month;
  let weekC =diffValue/(7*day);
  let dayC =diffValue/day;
  let hourC =diffValue/hour;
  let minC =diffValue/minute;
  let result="";
  if(monthC>=1){
    result= + parseInt(monthC) + "个月前";
  }
  else if(weekC>=1){
    result= + parseInt(weekC) + "周前";
  }
  else if(dayC>=1){
    result=+ parseInt(dayC) +"天前";
  }
  else if(hourC>=1){
    result=+ parseInt(hourC) +"个小时前";
  }
  else if(minC>=1){
    result=+ parseInt(minC) +"分钟前";
  }else
    result="刚刚发表";
  return result;
};
function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};
