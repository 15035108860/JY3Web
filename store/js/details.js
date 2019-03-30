$(function() {
	$("#topTop").append("<div id='logo'></div>"+
					"<div id='find'></div>"+
					"<div id='tip'></div>");
				
	$("#logo").append("<a href='index.html'><img src='http://pp4456viu.bkt.clouddn.com/logo.png' class='logo' /></a>");
	$("#find").append("<span class='find'>寻找宝贝店铺</span>");
	$("#tip").append("<span class='tip'><a href='login.html' class='a1'>欢迎您,小睿</a></span>");
	
	
	$("#topDiv").append("<div id='banner' class='banner'>"+
			"<div class='id2'>"+
				"<div id='carousel-example-generic' class='carousel slide' data-ride='carousel'>"+
			    "<ol class='carousel-indicators'>"+
			    "<li data-target='#carousel-example-generic' data-slide-to='0' class='active'></li>"+
			    "<li data-target='#carousel-example-generic' data-slide-to='1'></li>"+
			    "<li data-target='#carousel-example-generic' data-slide-to='2'></li>"+
			  "</ol>"+
			  "<div class='carousel-inner' role='listbox'>"+
			    "<div class='item active'>"+
			      "<img src='http://pp4456viu.bkt.clouddn.com/%E8%AF%A6%E6%83%85%E8%BD%AE%E6%92%AD02.jpg' alt='...'>"+
			    "</div>"+
			    "<div class='item'>"+
			      "<img src='http://pp4456viu.bkt.clouddn.com/%E8%AF%A6%E6%83%85%E8%BD%AE%E6%92%AD03.jpg' alt='...'>"+
			    "</div>"+
			    "<div class='item'>"+
			      "<img src='http://pp4456viu.bkt.clouddn.com/%E8%AF%A6%E6%83%85%E8%BD%AE%E6%92%AD04.jpg' alt='...'>"+
			    "</div>"+
			    
			  "</div>"+
			  "<a class='left carousel-control' href='#carousel-example-generic' role='button' data-slide='prev'>"+
			    "<span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>"+
			    "<span class='sr-only'>Previous</span>"+
			  "</a>"+
			  "<a class='right carousel-control' href='#carousel-example-generic' role='button' data-slide='next'>"+
			    "<span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>"+
			    "<span class='sr-only'>Next</span>"+
			  "</a>"+
			"</div>"+
		"</div>"+
	"</div>");
	$("#topDiv").append("<div id='price' class='price'>"+
						"<span class='world01'>￥2199-3777</span>"+
						"<span class='world02'><img src='http://pp4456viu.bkt.clouddn.com/%E5%88%86%E4%BA%AB.svg' class='img01'/>&nbsp;分享</span>"+
						"</div>");
	$("#topDiv").append("<div id='discribe' class='discribe'>"+
						"<p class='world03'>新品Xiaomi/小米 小米9 手机 全面屏小米9se</p>"+
						"<p class='world03'>星plus 透明尊享9现货.</p>"+
						"</div>");
	$("#topDiv").append("<div id='baobeixiangqing' class='baobeixiangqing'>"+
						"<span class='world04'>宝贝详情</span><br />"+
						"</div>"+
						"<hr class='hr1'  />");
	$("#topDiv").append("<div class='xiangqingtu'>"+
						"<img src='http://pp4456viu.bkt.clouddn.com/%E8%AF%A6%E6%83%8505.jpg' class='img02'/>"+
						"<img src='http://pp4456viu.bkt.clouddn.com/%E8%AF%A6%E6%83%8506.png' class='img02'/>"+
						"</div>");
	$("#topDiv").append("<div class='decoration'></div>");
	$("#topDiv").append("<div class='address'>"+
							"<span class='world05'>发货地址</span>"+
							"<span class='world06'>天津市东丽区的犄角旮旯</span>"+
						"</div>");
	$("#topDiv").append("<div class='decoration'></div>");
	$("#topDiv").append("<div class='address'>"+
							"<span class='world05'>服务</span>"+
							"<span class='world06'>七天无理由退货</span>"+
						"</div>");
						
	$("#topDiv").append("<div class='last'><span class='shangjiaxinxi'>常见问题</span>"+
						"<span class='shangjiaxinxi'>关于我们</span>"+
						"<span class='shangjiaxinxi'>网页</span>"+
						"<span class='shangjiaxinxi'>联系我们</span></div>");
						
	$("#topDiv").append("<div class='xiaoruilast'><span class='xiaorui'>@一切解释权归小睿所有</span></div>");

	$("#bottomDiv").append("<div id='left1' class='bottom'></div>"+
						"<div id='left2' class='bottom'></div>"+
						"<div id='left3' class='bottom'></div>"+
						"<div id='right1' class='bottom01'></div>"+
						"<div id='right2' class='bottom02'></div>");
	$("#left1").append("<img src='http://pp4456viu.bkt.clouddn.com/%E5%BA%97%E9%93%BA%281%29.svg' class='lable'/>"+
						"<span class='lableWorld'><a href='#' class='a2'>店铺</a></span>");
	$("#left2").append("<img src='http://pp4456viu.bkt.clouddn.com/%E5%AE%A2%E6%9C%8D.svg' class='lable'/>"+
						"<span class='lableWorld'><a href='#' class='a2'>客服</a></span>");
	$("#left3").append("<img src='http://pp4456viu.bkt.clouddn.com/%E6%94%B6%E8%97%8F%281%29.svg' class='lable'/>"+
						"<span class='lableWorld'><a href='#' class='a2'>收藏</a></span>");
	$("#right1").append("<span class='lableWorld01'><a href='cart.html' class='a3'>加入购物车</a></span>");
	$("#right2").append("<span class='lableWorld01'><a href='#' class='a3'>购买</a></span>");
})