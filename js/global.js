
//全局js
$(function(){
//start
if($(window).width()<=640){
    htmlsize();
}

$(window).resize(function(){
  if($(window).width()<=640){
      htmlsize();
  }
});

});

$(function(){

  $(document).on("click",".sc_com dt a",function(e){
        e.preventDefault();
        e.stopPropagation();
        if($(this).closest(".sc_com").hasClass("ieopen")){
          $(".ieopen").removeClass("ieopen")
        }else{
          $(".ieopen").removeClass("ieopen")
          $(this).closest(".sc_com").toggleClass("ieopen");
      }
  })

    $(document).on("click", ".select-box dd a", function (e) {
        $(this).addClass("on").siblings().removeClass("on");
        $(this).parents(".select-box").find("dt b").html($(this).html());
        var _val = $(this).data("val")
        $(this).closest(".select-box").find("dt input").val(_val)
    })
    $(document).bind("click",function () {
        $(".sc_com").removeClass("ieopen");

    })
    scroll(".select_a")


})
$(function(){

    if($(window).width()<=1660){ $("body").addClass("w_1660"); }else{ $("body").removeClass("w_1660"); };
    if($(window).width()<=1400){ $("body").addClass("w_1400"); }else{ $("body").removeClass("w_1400"); };
    if($(window).width()<=640){ $("body").removeClass("w_1660 w_1400"); $(".nav_show").height($(window).height()); }

		$(window).resize(function(){
        if($(window).width()<=1660){ $("body").addClass("w_1660"); }else{ $("body").removeClass("w_1660"); };
        if($(window).width()<=1400){ $("body").addClass("w_1400"); }else{ $("body").removeClass("w_1400"); };
         if($(window).width()<=640){ $("body").removeClass("w_1660 w_1400"); $(".nav_show").height($(window).height());}
		});
    if($(window).width()>640){
        $(".footer").css({"height":$(window).height()});
        $(".footer .top").css({"height":$(".footer").height() - $(".footer .bot").height()});
    }
    $(window).resize(function(){
      if($(window).width()>640){
          $(".footer").css({"height":$(window).height()});
          $(".footer .top").css({"height":$(".footer").height() - $(".footer .bot").height()});
      }
    });


    $(window).scroll(function(){
      if($(window).scrollTop() > 100){
          if($(".goto").size() == 1){
              $(".goto").fadeIn(300)
          }
      }else{
          if($(".goto").size() == 1){
              $(".goto").fadeOut(100)
          }
      }
    });
    $(".goto").on("click",function(){
      $("body,html").stop().animate({scrollTop:0},700);
    })

    /*小图*/
    if($(window).width()<1024){
      try{
          $(".img-phone").each(function(){
              var _src = $(this).attr("data-src");
              $(this).attr({
                "src":_src
              })
          });

          $(".data-phone-bg").each(function(){
              var _src = $(this).attr("data-phone-bg");
              $(this).attr({
                "style":"background:url("+ _src +") no-repeat center;"
              })
          })
        }catch(e){}
    }
    

    $(".header .r .search").on("click",function(e){
      e.preventDefault();
      e.stopPropagation();
      $(".header .search_w").toggleClass("on");
    });

    $(".header .r .nav").click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $("body").toggleClass("open");
      $(".nav_show").fadeToggle(300);
    });

    $(".header").mouseleave(function(){
        
        $("body").removeClass("open");
        $(".nav_show").fadeOut(300);
    })
    $(".search_w").click(function(){
        return false;
    });
    $(document).click(function(){
        $(".search_w").removeClass("on");
    });

    $(".nav_show .a a").click(function(){
        $("body").removeClass("open");
        $(".nav_show").fadeOut(300);
    })

})



function htmlsize(){
	var ww;
	var maxw=640;
	var minw=320;
	if($(window).width()>maxw){ww=maxw;}
	else if($(window).width()<minw){ww=minw;}
	else{
		ww=$(window).width();
	}
	$("html").css({fontSize:(ww/maxw)*100});
}




function addC(ele){
	$(ele).each(function(index,elements){
		$(this).addClass("list_"+index)
	})
}
// li n起始
function delay(ele,n,j){
	$(ele).each(function(index,elements){$(this).css({"transition-delay":n+j*index+"s"})})
}
function offset(ele){
	return $(ele).offset().top
}
function scorllAnimate(ele){
		var _offsetAnimate = $(ele).offset().top 
		var _scroll1Animate = $(window).scrollTop() + $(window).height()/2;
		if(_scroll1Animate >= _offsetAnimate){$(ele).addClass("show")}
		else{$(ele).removeClass("show")}
}

function scroll(ele){
	$(document).find(ele).mCustomScrollbar({
        horizontalScroll: false,
        advanced: {
            updateOnContentResize: true,
            updateOnBrowserResize: true,
            autoExpandHorizontalScroll: true
        }
    });
}

 //数字初始化效果
function numshow(e){
  var stv1;
  var x=Number($(e).attr("data-num"));
     if(x<10) {
          var y=0;
          var stv1=setInterval(function(){
            y++;
            $(e).text(y);
            if(y>=x){
              $(e).text(x);
              clearInterval(stv1);
            }
          },120);
    }
    if(x>=100){
          var y=0;
          var z=parseInt(x/100);
          var t=1000/60;

          var stv1=setInterval(function(){
            y=y+z;
            $(e).text(y);
            if(y+z>=x){
              $(e).text(x);
              clearInterval(stv1);
            }
          },t);
    }else if(x>=10){
          var y=0;
          var z=parseInt(x/10);

          var stv1=setInterval(function(){
            y=y+z;
            $(e).text(y);
            if(y+z>=x){
              $(e).text(x);
              clearInterval(stv1);
            }
          },80);
    }

}


function htmlsize(){
  var ww;
  var maxw=640;
  var minw=320;
  if($(window).width()>maxw){ww=maxw;}
  else if($(window).width()<minw){ww=minw;}
  else{
    ww=$(window).width();
  }
  $("html").css({fontSize:(ww/maxw)*100});
}

