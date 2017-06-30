/**
 * Created by Administrator on 2017/6/28.
 * 解析url参数
 * @example ?id=1234&a=b
 * @return Object {id:12345,a:b}
 */
function urlParse() {
  var url = window.location.search || "?content=未获取到url参数";
  var obj = {};
  var reg = /[?&][^?&]+=[^?&]+/g;
  var arr = url.match(reg);
  // ['?id=12345','&a=b']
  if (arr) {
    arr.forEach(function(item) {
      var tempArr = item.substring(1).split('=');
      var key = decodeURIComponent(tempArr[0]);
      var val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }
  return obj;
}
