const regObj = {
  //检测是否为空  
  IsNullOrEmpty(argument) {
    let flag = false;
    if (argument == null || argument == undefined || argument == '' || typeof(argument) == 'undefined') {
      flag = true;
    } else if (typeof(argument) == 'string') {
      argument = argument.trim();
      if (argument == '') {
        flag = true;
      } else {
        argument = argument.toUpperCase();
        if (argument == "NULL" || argument == "UNDEFINED" || argument == "{}") {
          flag = true;
        }
      }
    } else {
      flag = false;
    }
    return flag;
  },
  //检测是否为空格
  IsAllSpace(argument) {
    let flag = false;
    if (argument.length > 0) {
      argument = argument.replace(/(&nbsp;)/g, '').trim();
      if (argument == '') {
        flag = true
      }
    } else {
      flag = false
    }
    return flag;
  },
  //得到字节长度 
  getLen(argument) {
    let reg = /^[\u4e00-\u9fa5\uf900-\ufa2d]+$/;
    if (reg.test(argument)) {
      return argument.length * 2;
    } else {
      var oMatches = argument.match(/[\x00-\xff]/g); //匹配双字节字符
      var oLength = argument.length * 2 - oMatches.length;
      return oLength;
    }
  },
  //手机号码
  NotPhone(argument) {
    let flag = false,
      str = '';
    if (!/^\d+$/.test(argument)) {
      flag = true;
      str = '请输入手机号码'
    } else if (argument.lenth != 11) {
      flag = true;
      str = '请输入11位手机号码'
    } else if (!/^(1[3|4|5|7|8][0-9]){8}$/.test(argument)) {
      flag = true;
      str = '请输入正确的手机号码'
    } else {
      flag = false;
      str = ''
    }
    return flag, str;
  }
}

export default regObj;