$(function(){
	$("#top").append("<img src='http://pp4456viu.bkt.clouddn.com/logo.png' class='img'/> " );
	$("#message").append("<div id='userName'></div>"+
				"<div id='password'></div>"+
				"<div id='rpassword'></div>"+
				"<div id='yanzhengma'></div>");
	$("#prompt").append("<div id='login'></div>"+
				"<div id='register'></div>");
	
	$("#welcome").append("<span class='span'>欢&nbsp;迎&nbsp;来&nbsp;到&nbsp;小&nbsp;睿&nbsp;商&nbsp;场</span>")
	
	$("#userName").addClass("message");
	$("#password").addClass("message");
	$("#rpassword").addClass("message");
	$("#yanzhengma").addClass("message");
	
	$("#userName").append("<span class='span1'>手机号/邮箱</span>");
	$("#password").append("<span class='span1'>请输入密码</span>");
	$("#rpassword").append("<span class='span1'>请确认密码</span>");
	$("#yanzhengma").append("<span class='span1'>请输入验证码</span>");
	
	$("#prompt div").addClass("prompt");
	$("#login").html("<a href='login.html' class='a1'><span class='span2'>登&nbsp;录</span></a>");
	$("#register").html("<a href='#' class='a1'><span class='span2'>注&nbsp;册</span></a>");
})