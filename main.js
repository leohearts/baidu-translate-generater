var appid = "Your appid";
var key = "Your key";
var a = ""
var fs = require("fs");
var stdinBuffer = fs.readFileSync(0); // STDIN_FILENO = 0
a = stdinBuffer.toString();

var crypto = require('crypto');
function md5 (text) {
  return crypto.createHash('md5').update(text).digest('hex');
};

function bdtranslate(txt){
    var salt = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    var apisign = md5(''+appid+txt+salt+key);
    var url = "https://api.fanyi.baidu.com/api/trans/vip/translate?q="+encodeURI(txt)+"&from=auto&to=zh&appid="+appid+"&salt="+salt+"&sign="+apisign;
    console.log('"'+url+'"')
}
bdtranslate(a)
