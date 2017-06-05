"use strict";

$(function(){
    wheelEvent.registEventScroll();
});

var wheelEvent = {
    registEventScroll:function(){
        $(".box").each(function () {
            $(this).on("mousewheel DOMMouseScroll", function (e) {
                e.preventDefault();
                e.stopPropagation();
                
                if($("html, body").is(":animated")){
                    return;
                }
                
                var delta = 0;
                var moveTop = null;
                var currentIdx = 0;
                
                if(!event) event = window.event;
                if(event.wheelDelta){ 
                    //IE, 크롬, 오페라, 사파리
                    delta = event.wheelDelta / 120;
                    if(window.opera) { delta = -delta; }
                    //파이어폭스
                }else if(event.detail){
                    delta = -event.detail / 3;
                }
                
                //마우스 휠 아래로 스크롤
                if(delta < 0){
                    if($(this).next()[0] != undefined){
                        moveTop = $(this).next().offset().top;
                        currentIdx = $(this).index()+1;
                    }else{
                        return;
                    }
                //마우스 휠 위로 스크롤
                }else{
                    if($(this).prev()[0] != undefined){
                        moveTop = $(this).prev().offset().top;
                        currentIdx = $(this).index()-1;
                    }else{
                        return;
                    }
                }
                
                //메뉴 색상 바꾸기
                for(var i=0; i<$("header").find("ul").find("li").length; i++){
                    $("header").find("ul").find("li").eq(i).css("color","#fff");
                    if(i == currentIdx){
                        $("header").find("ul").find("li").eq(i).stop().animate({
                            color:"red"
                        },800);
                    }
                }
                
                $("html, body").stop().animate({
                    scrollTop: moveTop + "px"
                }, 800, "easeInOutQuad",function(){
                    //애니메이션 완료시 callback
                    
                });
                
            });
        });
    }
};