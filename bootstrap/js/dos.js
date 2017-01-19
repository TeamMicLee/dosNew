(function() {
				if($(window).width() <= 1339) {
					$('body').width(1339).css('overflow', 'auto');
				}
		
				$('.head-fixed,.tablehead-fixed').width($('.container').width());
				//当浏览器窗口宽度小于1339时固定页面宽度为1000并添加横向滚动条
				$(window).resize(function() {
					$('.head-fixed,.tablehead-fixed').width($('.container').width());
					if($(window).width() <= 1339) {
						$('body').width(1339).css('overflow', 'auto');
					}
				});
				
				//当浏览器窗口宽度大于1339是页面宽度自适应
				$(window).resize(function() {
					$('.head-fixed,.tablehead-fixed').width($('.container').width());
					if($(window).width() > 1339) {
						$('body').width('auto').css('overflow', 'auto');
					}
				});
				
				//窗口最大化时head-fixed宽度变化
				var rightwidth = 15;
				$(window).resize(function() {
					$('.head-fixed,.tablehead-fixed').width($('.container').width());
					if($(window).width() > 0) {
						$('.head-fixed').width(('100%') - rightwidth);
					}
				});
				
				//让使用了fixed定位的页面内容能够跟随横向滚动条移动
				var initwidth = 15;
				$('body').data('top', $(window).scrollTop()).data('left', $(window).scrollLeft());
		
				$(window).scroll(function() {
					$('#first-table').css('left', 0 - $(window).scrollLeft() + initwidth);
					$('.head-fixed').css('left', 0 - $(window).scrollLeft());
				});


				/* $(".show-icon").popover({  
				       html : true,    
				       title: title(),
				       delay:{show:500, hide:1000},
				       trigger:"click",
				       content: function() {  
				         return content();    
				       }   
				   });   */
				  
				  //tab页切换
				$("#threeType").on('click','a',function(){
					var typeName = $(this).html();
					var sid   = $("#sid").val();
					var val = $("#exhaustvolume").find("option:selected").attr("name")==0?null:$("#exhaustvolume").find("option:selected").text();
					$(this).parent().addClass("active").siblings().removeClass("active");
				})
				
				
				
				//点击显示配件详单
				 $("#result").on('click',"td[name='tb']",function(){
	 							var mid = $(this).parent().children().eq(0).attr("id");
	 							var typeName = $(".active").text();
								 var isshow = false;
								 var $this=$(this).parent();
								 $(this).parent().find(".title-img").each(function(){
									 if($(this).css("height") == "30px"){
										 $(this).css("height","");
										 isshow = true;
										 $this.find('.clickdown').addClass('clickup');
									 }else{
										 $(this).css("height","30px");
										 isshow = false;
										 $this.find('.clickdown').removeClass('clickup');
									 }
									
								 });
	
								if(isshow){
								//	addRemark(mid,typeName,this);
									
								 } /* else{
									 $(this).parent().next().hide();
								 }   */
							 });
		
			})(jQuery);