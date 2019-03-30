$(function(){
	
	$("#topDiv").append("<div id='onTop' class='topDiv'></div>"+
						"<div id='underTop' class='underDiv'></div>");
	$("#onTop").append("<span class='world01' class='onTop'>我的订单</span>");
	$("#underTop").append("<span class='world08' >全部</span>"+
						"<span class='world02' >代付款</span>"+
						"<span class='world02' >代发货</span>"+
						"<span class='world02' >待收货</span>"+
						"<span class='world02' >待评价</span>");
	$("#centerDiv").append("<div id='div1' class=div1></div>"+
							"<div id='div2' class=div1></div>"+
							"<div id='div3' class=div1></div>"+
							"<div id='div4' class=div1></div>"+
							"<br />"+
							"<br />"+
							"<br />");
	$("#div1").append("<a href='details.html'><span class='world02'>小睿旗舰店</span></a>"+
					"<div id='subDiv' class='subDiv'></div>");
	$("#subDiv").append("<img src='http://pp4456viu.bkt.clouddn.com/cart1.jpg' class='img01' />"+
						"<div id='gouWuXinXi' class='gouwuxinxi'></div>");
	$("#gouWuXinXi").append("<span class='world03'>新品Xiaomi/小米 小米9</span>"+
							"<span class='world03'>全面屏小米9se</span>"+
							"<span class='world04'>数量:2</span>"+	
//							"<div id='countDiv' class='countDiv'>"+
//								"<div class='shuliang'><span class='world06'>-</span></div>"+
//								"<div class='shuliang'><span class='world06'>1</span></div>"+
//								"<div class='shuliang'><span class='world06'>+</span></div>"+
//							"</div>"+
							"<span class='world04'>￥ 2999</span>"+	
							"<div id='payDiv' class='payDiv'>"+
								"<div class='zhifu'><span class='world05'>查询物流</span></div>"+
								"<div class='zhifu'><span class='world05'>确认收货</span></div>"+
							"</div>");
	$("#div2").append("<span class='world02'>小睿旗舰店</span>"+
					"<div id='subDiv2' class='subDiv'></div>");
	$("#subDiv2").append("<img src='http://pp4456viu.bkt.clouddn.com/cart2.png' class='img01' />"+
						"<div id='gouWuXinXi2' class='gouwuxinxi'></div>");
	$("#gouWuXinXi2").append("<span class='world03'>新品Xiaomi/小米 小爱同学</span>"+
							"<span class='world03'>人工智能小米小爱</span>"+
							"<span class='world04'>数量:2</span>"+	
							
							"<span class='world04'>￥ 254</span>"+	
							"<div id='payDiv' class='payDiv'>"+
								"<div class='zhifu'><span class='world05'>查询物流</span></div>"+
								"<div class='zhifu'><span class='world05'>确认收货</span></div>"+
							"</div>");
	$("#div3").append("<span class='world02'>小睿旗舰店</span>"+
					"<div id='subDiv3' class='subDiv'></div>");
	$("#subDiv3").append("<img src='http://pp4456viu.bkt.clouddn.com/cart3.png' class='img01' />"+
						"<div id='gouWuXinXi3' class='gouwuxinxi'></div>");
	$("#gouWuXinXi3").append("<span class='world03'>新品苹果X</span>"+
							"<span class='world03'>全面屏</span>"+
							"<span class='world04'>数量:1</span>"+	
							
							"<span class='world04'>￥ 6999</span>"+	
							"<div id='payDiv' class='payDiv'>"+
								"<div class='zhifu'><span class='world05'>查询物流</span></div>"+
								"<div class='zhifu'><span class='world05'>确认收货</span></div>"+
							"</div>");
	$("#div4").append("<span class='world02'>小睿旗舰店</span>"+
					"<div id='subDiv4' class='subDiv'></div>");
	$("#subDiv4").append("<img src='http://pp4456viu.bkt.clouddn.com/cart4.png' class='img01' />"+
						"<div id='gouWuXinXi4' class='gouwuxinxi'></div>");
	$("#gouWuXinXi4").append("<span class='world03'>新品上衣春季款</span>"+
							"<span class='world03'>时尚</span>"+
							"<span class='world04'>数量:2</span>"+	
							
							"<span class='world04'>￥ 199</span>"+	
							"<div id='payDiv' class='payDiv'>"+
								"<div class='zhifu'><span class='world05'>查询物流</span></div>"+
								"<div class='zhifu'><span class='world05'>确认收货</span></div>"+
							"</div>");
							
	//底部
	$("#bottomDiv").append("<div id='left1' class='bottom'></div>"+
						"<div id='left2' class='bottom'></div>"+
						"<div id='left3' class='bottom'></div>"+
						"<div id='right1' class='bottom'></div>"+
						"<div id='right2' class='bottom'></div>");
	$("#left1").append("<img src='http://pp4456viu.bkt.clouddn.com/%E4%B8%BB%E9%A1%B5.svg' class='lable'/>"+
						"<span class='lableWorld'><a href='index.html' class='a2'>首页</a></span>");
	$("#left2").append("<img src='http://pp4456viu.bkt.clouddn.com/%E8%B4%AD%E7%89%A9%E8%BD%A6.svg' class='lable'/>"+
						"<span class='lableWorld'><a href='cart.html' class='a2'>购物车</a></span>");
	$("#left3").append("<img src='http://pp4456viu.bkt.clouddn.com/%E8%AE%A2%E5%8D%95%281%29.svg' class='lable'/>"+
						"<span class='lableWorld'><a href='#' class='a2'>订单列表</a></span>");
	$("#right1").append("<img src='http://pp4456viu.bkt.clouddn.com/%E6%88%91%E7%9A%84.svg' class='lable'/>"+
						"<span class='lableWorld'><a href='#' class='a2'>我的</a></span>");
	$("#right2").append("<img src='http://pp4456viu.bkt.clouddn.com/%E6%9B%B4%E5%A4%9A.svg' class='lable'/>"+
						"<span class='lableWorld'><a href='#' class='a2'>更多</a></span>");						
							
							
})