//限制表格内容长度
$(function(){
	// var tddiv=$(".table tbody tr td div");
	var tail=$(".table_tail ul li");
	var tdwid=$(".table tbody tr td");
	var check_box=$(".check_box");
	var check_Box=$(".checkedBox");
	var mystr = "";
	tdwid.css({"max-width":"98px","overflow":"hidden","text-overflow":"ellipsis", "white-space":"nowrap"});
	$('#approvalPage .table tbody tr td').css({"min-width":"85px","max-width":"none"})
	tdwid.on('mouseover',function(){
    tdwid.each(function(){
	    	mystr= $(this).text();
	    	mystr=mystr.replace(/[\r\n]/g,"");
	    	mystr=mystr.replace(/[ ]/g,"");
            $(this).attr("title",mystr);
        });
	});
	$(".table").on('mouseover','.limt_length',function(){
		var tdwid=$(".table tbody tr td");
    	tdwid.each(function(){
            $(this).attr("title",$(this).text());
        });
	});
	//动态加样式
tail.css({"text-decoration":"none","float":"left","margin-left":"5%"});
//swich切换
	$('.switch-in').click(function(){
				var bChoose = $(this).hasClass('unchoose');
				if($(this).hasClass('unchoose')){
					$(this).removeClass('unchoose');
					$(this).find(".check_swich").attr("checked","checked")
				}else{
					$(this).addClass('unchoose');
					$(this).find(".check_swich").removeAttr("checked","checked")
				}
				
			});
		
			//火箭升空
			var containerTop=parseInt($(".page-header-menu").offset().top);
			var offset = 100;
			var duration = 500;
			if($(document).scrollTop()>offset){
					$('.sw-hj').show();
				} else {
					$('.sw-hj').hide();
			}
			$(window).scroll(function() {
				if($(window).scrollTop()>containerTop){			
			$(".sw-hj").click(function(){
			$("body,html").stop().animate({scrollTop:0},1000);
			});
			}
				if ($(this).scrollTop() > offset) {
					$('.icon-arrow-up').stop().fadeIn(duration);
				} else {
					$('.icon-arrow-up').stop().fadeOut(duration);
				}
				});

//申请单审核页面 审核信息高度等于申请单信息高度
$('#approvalPage .auditOrderInfo').height($('#approvalPage .applyOrderInfo').height());
});