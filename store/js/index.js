$(function(){	
	$("#top").append("<div id='logo'></div>"+
					"<div id='find'></div>"+
					"<div id='tip'></div>");
				
	$("#logo").append("<img src='http://pp4456viu.bkt.clouddn.com/logo.png' class='logo' />");
	$("#find").append("<span class='find'>寻找宝贝店铺</span>");
	$("#tip").append("<span class='tip'><a href='login.html' class='a1'>登录</a></span>"+
					"<span class='tip'><a href='register.html' class='a1'>注册</a></span>");
	//底部
	$("#bottom").append("<div id='left1' class='bottom'></div>"+
						"<div id='left2' class='bottom'></div>"+
						"<div id='left3' class='bottom'></div>"+
						"<div id='right1' class='bottom'></div>"+
						"<div id='right2' class='bottom'></div>");
	$("#left1").append("<img src='http://pp4456viu.bkt.clouddn.com/%E4%B8%BB%E9%A1%B5%281%29.svg'/>"+
						"<span class='lableWorld'><a href='#' class='a2'>首页</a></span>");
	$("#left2").append("<img src='http://pp4456viu.bkt.clouddn.com/%E8%B4%AD%E7%89%A9%E8%BD%A6.svg' class='lable'/>"+
						"<span class='lableWorld'><a href='cart.html' class='a2'>购物车</a></span>");
	$("#left3").append("<img src='http://pp4456viu.bkt.clouddn.com/%E8%AE%A2%E5%8D%95%E5%88%97%E8%A1%A8.svg' class='lable'/>"+
						"<span class='lableWorld'><a href='#' class='a2'>订单列表</a></span>");
	$("#right1").append("<img src='http://pp4456viu.bkt.clouddn.com/%E6%88%91%E7%9A%84.svg' class='lable'/>"+
						"<span class='lableWorld'><a href='#' class='a2'>我的</a></span>");
	$("#right2").append("<img src='http://pp4456viu.bkt.clouddn.com/%E6%9B%B4%E5%A4%9A.svg' class='lable'/>"+
						"<span class='lableWorld'><a href='#' class='a2'>更多</a></span>");
	
	//中间
	$("#center").append("<div id='carousel-example-generic' class='carousel slide' data-ride='carousel'>"+
    "<ol class='carousel-indicators'>"+
    "<li data-target='#carousel-example-generic' data-slide-to='0' class='active'></li>"+
    "<li data-target='#carousel-example-generic' data-slide-to='1'></li>"+
    "<li data-target='#carousel-example-generic' data-slide-to='2'></li>"+
  "</ol>"+
  "<div class='carousel-inner' role='listbox'>"+
    "<div class='item active'>"+
      "<img src='http://pp4456viu.bkt.clouddn.com/%E8%BD%AE%E6%92%AD%E5%9B%BE01.jpg' alt='...'>"+
    "</div>"+
    "<div class='item'>"+
      "<img src='http://pp4456viu.bkt.clouddn.com/%E8%BD%AE%E6%92%AD%E5%9B%BE02.jpg' alt='...'>"+
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
"</div>");
	$("#center").append("<div id='fenlei' class='fenlei'></div>");
	$("#fenlei").append("<div id='subDiv1' class='subDiv'></div>"+
						"<div id='subDiv2' class='subDiv'></div>");
	$("#subDiv1").append("<div class='subDiv01'>"+
						"<img src='http://pp4456viu.bkt.clouddn.com/%E5%88%86%E7%B1%BB1.png' class='img01'><span class='fenleiWorld'>手机数码</span></div>"+
						"<div class='subDiv01'>"+
						"<img src='http://pp4456viu.bkt.clouddn.com/%E5%88%86%E7%B1%BB2.png' class='img01'><span class='fenleiWorld'>笔记本电脑</span></div>"+
						"<div class='subDiv01'>"+
						"<img src='http://pp4456viu.bkt.clouddn.com/%E5%88%86%E7%B1%BB3.png'><span class='fenleiWorld'>日常家电</span></div>"+
						"<div class='subDiv01'>"+
						"<img src='http://pp4456viu.bkt.clouddn.com/%E5%88%86%E7%B1%BB4.png' class='img01'><span class='fenleiWorld'>智能音响</span></div>");
	$("#subDiv2").append("<div class='subDiv01'>"+
						"<img src='http://pp4456viu.bkt.clouddn.com/%E5%88%86%E7%B1%BB5.png' class='img01'><span class='fenleiWorld'>男装</span></div>"+
						"<div class='subDiv01'>"+
						"<img src='http://pp4456viu.bkt.clouddn.com/%E5%88%86%E7%B1%BB6.png' class='img01'><span class='fenleiWorld'>女装</span></div>"+
						"<div class='subDiv01'>"+
						"<img src='http://pp4456viu.bkt.clouddn.com/%E5%88%86%E7%B1%BB7.png' class='img01'><span class='fenleiWorld'>童装</span></div>"+
						"<div class='subDiv01'>"+
						"<img src='http://pp4456viu.bkt.clouddn.com/%E5%88%86%E7%B1%BB8.png' class='img01'><span class='fenleiWorld'>数码相机</span></div>");
					
	$("#center").append("<div class='remaiDiv'><span class='remai'>热&nbsp;卖&nbsp;商&nbsp;品</span></div>");				
	$("#center").append("<div id='remaitupian' class='remaitupian'>"+
						"<div id='leftRemaitu' class='subRemaitu1'></div>"+
						"<div id='rightRemaitu' class='subRemaitu2'></div>"+				
						"</div>");
	$("#leftRemaitu").append("<a href='details.html'><img src='http://pp4456viu.bkt.clouddn.com/%E8%BD%AE%E6%92%AD1.jpg_430x430q90.jpg' class='img02'/></a>")
	
	$("#rightRemaitu").append("<div id='rightRemaitu1' class='rightRemaitu'></div>"+
						"<div id='rightRemaitu2' class='rightRemaitu'></div>");
	$("#rightRemaitu1").append("<img src='http://pp4456viu.bkt.clouddn.com/%E8%BD%AE%E6%92%AD2.jpg_430x430q90.jpg'  class='img03'/>")				
	$("#rightRemaitu2").append("<img src='http://pp4456viu.bkt.clouddn.com/%E7%83%AD%E5%8D%96%E5%8D%95%E5%93%81.jpg_430x430q90.jpg'  class='img03'/>")				
	$("#center").append("<div class='remaiDiv'><span class='shishang'>时&nbsp;尚&nbsp;天&nbsp;地</span></div>");					
	$("#center").append("<div id='shishangtiandi' class='shishangtiandi'>"+
						"<div id='shishangtiandi1' class='shishangtiandi1'></div>"+
						"<div id='shishangtiandi2' class='shishangtiandi2'></div>"+				
						"</div>");					
	$("#shishangtiandi1").append("<div id='shangyi' class='shangyi'></div>"+
						"<div id='kuzi' class='kuzi'></div>"
						);
	$("#shangyi").append("<span class='world01'>上衣</span><br />"+
						"<span class='world02'>全球精品上衣</span>"+
						"<div id='shangyitupian' class='shangyitupian'>"+
						"</div>");
	$("#shangyitupian").append("<img src='http://pp4456viu.bkt.clouddn.com/%E7%B2%BE%E5%93%81-%E4%B8%8A%E8%A1%A301.png' class='img04'/>"+
								"<img src='http://pp4456viu.bkt.clouddn.com/%E7%B2%BE%E5%93%81-%E4%B8%8A%E8%A1%A302.jpg' class='img04'/>");
							
	$("#kuzi").append("<span class='world01'>裤子</span><br />"+
						"<span class='world02'>全球精品裤子</span>"+
						"<div id='kuzitupian' class='shangyitupian'>"+
						"</div>");
	$("#kuzitupian").append("<img src='http://pp4456viu.bkt.clouddn.com/%E7%B2%BE%E5%93%81-%E8%A3%A4%E5%AD%9001.jpg' class='img04'/>"+
							"<img src='http://pp4456viu.bkt.clouddn.com/%E7%B2%BE%E5%93%81-%E8%A3%A4%E5%AD%9002.jpg' class='img04'/>");
					
					
	$("#shishangtiandi2").append("<div id='xiezi' class='shangyi'></div>"+
						"<div id='baobao' class='kuzi'></div>"
						);
	$("#xiezi").append("<span class='world01'>鞋子</span><br />"+
						"<span class='world02'>全球精品鞋子</span>"+
						"<div id='xiezitupian' class='shangyitupian'>"+
						"</div>");
	$("#xiezitupian").append("<img src='http://pp4456viu.bkt.clouddn.com/%E7%B2%BE%E5%93%81-%E9%9E%8B%E5%AD%9001.jpg' class='img04'/>"+
							"<img src='http://pp4456viu.bkt.clouddn.com/%E7%B2%BE%E5%93%81-%E9%9E%8B%E5%AD%9002.jpg' class='img04'/>");
							
	$("#baobao").append("<span class='world01'>包包</span><br />"+
						"<span class='world02'>全球精品包包</span>"+
						"<div id='baobaotupian' class='shangyitupian'>"+
						"</div>");
	$("#baobaotupian").append("<img src='http://pp4456viu.bkt.clouddn.com/%E7%B2%BE%E5%93%81-%E5%8C%85%E5%8C%8501.jpg' class='img04'/>"+
							"<img src='http://pp4456viu.bkt.clouddn.com/%E7%B2%BE%E5%93%81-%E5%8C%85%E5%8C%8502.jpg' class='img04'/>");
	$("#center").append("<div ><span class='remai'>强&nbsp;烈&nbsp;推&nbsp;荐</span></div>");				
					
	$("#center").append("<div id='tuijian' class='tuijian'>"+
						"<div id='topTuijian' class='topTuijian'></div>"+
						"<div id='bottomTuijian' class='bottomTuijian'></div>"+				
						"</div>");	
	$("#topTuijian").append("<img src='http://pp4456viu.bkt.clouddn.com/%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%9001.jpg' class='img05'/>");	
	$("#bottomTuijian").append("<div class='subBottom'><img src='http://pp4456viu.bkt.clouddn.com/%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%9002.png' class='img06'/></div>"+
							"<div class='subBottom'><img src='http://pp4456viu.bkt.clouddn.com/%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%9003.png' class='img06'/></div>");
	$("#center").append("<div class='last'><span class='shangjiaxinxi'>常见问题</span>"+
						"<span class='shangjiaxinxi'>关于我们</span>"+
						"<span class='shangjiaxinxi'>网页</span>"+
						"<span class='shangjiaxinxi'>联系我们</span></div>");
						
	$("#center").append("<div class='xiaoruilast'><span class='xiaorui'>@一切解释权归小睿所有</span></div>");
})