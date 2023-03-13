//密码校验
function isPwd(){
    var text= document.getElementById("pwd1").value;
    var re =/^(?=.*[a-z])(?=.*\d)[^]{8,16}$/;
    var result =  re.test(text);
    if(!result) {
        document.getElementById("pwd1Span").innerHTML = "密码必须包含数字,字母,且不少于8位";
        return false;
    }else {
        document.getElementById("pwd1Span").innerHTML = "";
        return true;
    }
};
//确认密码
function isCom(){
    var text1= document.getElementById("pwd1").value;
    var text2= document.getElementById("pwd2").value;
    if (text2 == text1){
        document.getElementById("pwd2Span").innerHTML = "";
        return true;
    }else {
        document.getElementById("pwd2Span").innerHTML = "两次输入的密码不一致";
        return false;
    }
}
//提交密码跳转
const button = document.querySelector('.btn-success');
button.addEventListener('click', function() {
window.location.href = button.href;
});