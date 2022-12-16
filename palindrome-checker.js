module.exports = function (str) {
  var h = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  let v =h.split('').reverse().join('')
  if(h === v){
    return true;
  }else{
    return false;
  }
}