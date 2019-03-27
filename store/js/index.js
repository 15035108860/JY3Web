$(function(){	
	$("#top").append("<div id='logo'></div>"+
					"<div id='find'></div>"+
					"<div id='tip'></div>");
				
	$("#logo").append("<img src='../img/logo.png' class='logo' />");
	$("#find").append("<span class='find'>寻找宝贝店铺</span>");
	$("#tip").append("<span class='tip'><a href='#' class='a1'>登录</a></span>"+
					"<span class='tip'><a href='#' class='a1'>注册</a></span>");
	
	//底部
	$("#bottom").append("<div id='left1' class='bottom'></div>"+
						"<div id='left2' class='bottom'></div>"+
						"<div id='left3' class='bottom'></div>"+
						"<div id='right1' class='bottom'></div>"+
						"<div id='right2' class='bottom'></div>");
	$("#left1").append("<img src='../img/主页.svg' class='lable'/>"+
						"<span class='lableWorld'><a href='#' class='a2'>首页</a></span>");
	$("#left2").append("<img src='../img/购物车.svg' class='lable'/>"+
						"<span class='lableWorld'><a href='#' class='a2'>购物车</a></span>");
	$("#left3").append("<img src='../img/订单列表.svg' class='lable'/>"+
						"<span class='lableWorld'><a href='#' class='a2'>订单列表</a></span>");
	$("#right1").append("<img src='../img/我的.svg' class='lable'/>"+
						"<span class='lableWorld'><a href='#' class='a2'>我的</a></span>");
	$("#right2").append("<img src='../img/更多.svg' class='lable'/>"+
						"<span class='lableWorld'><a href='#' class='a2'>更多</a></span>");
	
	//中间
	$("#center").append("<div id='lunbo' class='lunbo'>"+
						"<img src='../img/轮播02.jpg_430x430q90.jpg' class='lunbotu'/>"+
						"</div>");
	$("#center").append("<div id='fenlei' class='fenlei'></div>");
	$("#fenlei").append("<div id='subDiv1' class='subDiv'></div>"+
						"<div id='subDiv2' class='subDiv'></div>");
	$("#subDiv1").append("<div class='subDiv01'>"+
						"<img src='../img/分类1.png' class='img01'><span class='fenleiWorld'>手机数码</span></div>"+
						"<div class='subDiv01'>"+
						"<img src='../img/分类2.png' class='img01'><span class='fenleiWorld'>笔记本电脑</span></div>"+
						"<div class='subDiv01'>"+
						"<img src='../img/分类3.png' class='img01'><span class='fenleiWorld'>日常家电</span></div>"+
						"<div class='subDiv01'>"+
						"<img src='../img/分类4.png' class='img01'><span class='fenleiWorld'>智能音响</span></div>");
	$("#subDiv2").append("<div class='subDiv01'>"+
						"<img src='../img/分类5.png' class='img01'><span class='fenleiWorld'>男装</span></div>"+
						"<div class='subDiv01'>"+
						"<img src='../img/分类6.png' class='img01'><span class='fenleiWorld'>女装</span></div>"+
						"<div class='subDiv01'>"+
						"<img src='../img/分类7.png' class='img01'><span class='fenleiWorld'>童装</span></div>"+
						"<div class='subDiv01'>"+
						"<img src='../img/分类8.png' class='img01'><span class='fenleiWorld'>数码相机</span></div>");
					
	$("#center").append("<div class='remaiDiv'><span class='remai'>热&nbsp;卖&nbsp;商&nbsp;品</span></div>");				
	$("#center").append("<div id='remaitupian' class='remaitupian'>"+
						"<div id='leftRemaitu' class='subRemaitu1'></div>"+
						"<div id='rightRemaitu' class='subRemaitu2'></div>"+				
						"</div>");
	$("#leftRemaitu").append("<img src='../img/轮播1.jpg_430x430q90.jpg' class='img02'/>")
	
	$("#rightRemaitu").append("<div id='rightRemaitu1' class='rightRemaitu'></div>"+
						"<div id='rightRemaitu2' class='rightRemaitu'></div>");
	$("#rightRemaitu1").append("<img src='../img/轮播2.jpg_430x430q90.jpg'  class='img03'/>")				
	$("#rightRemaitu2").append("<img src='../img/热卖单品.jpg_430x430q90.jpg'  class='img03'/>")				
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
	$("#shangyitupian").append("<img src='../img/精品-上衣01.png' class='img04'/>"+
							"<img src='../img/精品-上衣02.jpg' class='img04'/>");
							
	$("#kuzi").append("<span class='world01'>裤子</span><br />"+
						"<span class='world02'>全球精品裤子</span>"+
						"<div id='kuzitupian' class='shangyitupian'>"+
						"</div>");
	$("#kuzitupian").append("<img src='../img/精品-裤子01.jpg' class='img04'/>"+
							"<img src='../img/精品-裤子02.jpg' class='img04'/>");
					
					
	$("#shishangtiandi2").append("<div id='xiezi' class='shangyi'></div>"+
						"<div id='baobao' class='kuzi'></div>"
						);
	$("#xiezi").append("<span class='world01'>鞋子</span><br />"+
						"<span class='world02'>全球精品鞋子</span>"+
						"<div id='xiezitupian' class='shangyitupian'>"+
						"</div>");
	$("#xiezitupian").append("<img src='../img/精品-鞋子01.jpg' class='img04'/>"+
							"<img src='../img/精品-鞋子02.jpg' class='img04'/>");
							
	$("#baobao").append("<span class='world01'>包包</span><br />"+
						"<span class='world02'>全球精品包包</span>"+
						"<div id='baobaotupian' class='shangyitupian'>"+
						"</div>");
	$("#baobaotupian").append("<img src='../img/精品-包包01.jpg' class='img04'/>"+
							"<img src='../img/精品-包包02.jpg' class='img04'/>");
	$("#center").append("<div ><span class='remai'>强&nbsp;烈&nbsp;推&nbsp;荐</span></div>");				
					
	$("#center").append("<div id='tuijian' class='tuijian'>"+
						"<div id='topTuijian' class='topTuijian'></div>"+
						"<div id='bottomTuijian' class='bottomTuijian'></div>"+				
						"</div>");	
	$("#topTuijian").append("<img src='../img/强烈推荐01.jpg' class='img05'/>");	
	$("#bottomTuijian").append("<div class='subBottom'><img src='../img/强烈推荐02.png' class='img06'/></div>"+
							"<div class='subBottom'><img src='../img/强烈推荐03.png' class='img06'/></div>");
	$("#center").append("<div class='last'><span class='shangjiaxinxi'>常见问题</span>"+
						"<span class='shangjiaxinxi'>关于我们</span>"+
						"<span class='shangjiaxinxi'>网页</span>"+
						"<span class='shangjiaxinxi'>联系我们</span></div>");
						
	$("#center").append("<div class='xiaoruilast'><span class='xiaorui'>@一切解释权归小睿所有</span></div>");
})