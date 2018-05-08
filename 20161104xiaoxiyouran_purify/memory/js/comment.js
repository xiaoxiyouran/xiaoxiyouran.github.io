$(function(){

    //婊氬姩鏉″彂鐢熸粴鍔�
    $(window).scroll(function(){
        
        var top = $(document).scrollTop();
        var menu = $("#r-menu");
        var items = $("#content").find(".item");
        
        var currentId = ""; //褰撳墠鎵€鍦ㄧ殑妤煎眰(item) #id
        items.each(function(){
            var m = $(this);
            var itemTop = m.offset().top;
            if(top > itemTop - 200){
                currentId = "#" + m.attr("id");
            }else{
                return false;
            }
        });
        
        var currentLink = menu.find(".current");
        if(currentId && currentLink.attr("href") != currentId){
            currentLink.removeClass("current");
            menu.find("[href=" + currentId + "]").addClass("current");
        }
        //console.log(top);
    });
});