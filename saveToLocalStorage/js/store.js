/**
 * Created by Administrator on 2017/6/28.
 * @param id 存储的对象
 * @param key 对象中的关键字
 * @param value 对象中 关键字 对应的值
 * @param def 对象中 关键字 对应的值的默认值
 */
function saveToLocal(id, key, value) {
  var Osave = window.localStorage.__saveObj__;
  if (!Osave) {
    Osave = {};
    Osave[id] = {};
  } else {
    Osave = JSON.parse(Osave);
    if (!Osave[id]) {
      Osave[id] = {};
    }
  }
  Osave[id][key] = value;
  window.localStorage.__saveObj__ = JSON.stringify(Osave);
};
function loadFromLocal(id, key, def) {
  var Osave = window.localStorage.__saveObj__;
  if (!Osave) {
    return def;
  }
  Osave = JSON.parse(Osave)[id];
  if (!Osave) {
    return def;
  }
  var ret = Osave[key];
  return ret || def;
};
