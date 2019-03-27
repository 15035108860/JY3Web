$(function(){
	$("#head").append("<img src='../img/头像.png'  class='img'/>");
	$("#message").append("<div id='userName'></div>"+
				"<div id='password'></div>"+
				"<div id='prompt'></div>");
	$("#login").append("<div></div>");
	
	$("#userName").append("<span class='span'>手机号/邮箱/会员名</span> ");
	$("#password").append("<span class='span'>请输入密码</span> ");
	$("#prompt").append("<span class='span1'>短信验证登录</span> <span class='span1'><a href='#' class='a2'>注册</a></span>");
	
	$("#userName").addClass("userName");
	$("#password").addClass("userName");
	$("#prompt").addClass("prompt");
	
	$("#login div").addClass("login");
	$("#login div").html("<a href='#' class='a1'><span class='span2'>登&nbsp;录</span></a>");
	
})