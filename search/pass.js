// 密碼檢驗程式
var yonghuming = prompt("請輸入用戶名");
var mima = prompt("請輸入密碼");

while( yonghuming!="admin" || mima!="88888"){
    alert("請輸入用戶名或密碼有誤")
    yonghuming = prompt("請輸入用戶名");
    mima = prompt("請輸入密碼");

}
alert("登錄成功");