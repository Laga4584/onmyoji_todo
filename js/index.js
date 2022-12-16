$(document).ready(function(){
    // header
    /*
    $(".menu_main li").hover(function(){
        $(this).css({opacity:0.5});
    }, function(){
        $(this).css({opacity:1});
    });
    $(".menu_sub li").hover(function(){
        $(this).css({opacity:0.7});
    }, function(){
        $(this).css({opacity:1});
    });
    */

    // recommend
    var num_rec = 20;
    console.log(num_rec);
    for (var i = 0; i < num_rec; i++){
       
        $(".recommend ul").append("<li class='novel_"+(i+1)+"'><a href=''>작품"+(i+1)+"</a></li>");
        $(".recommend a:eq("+i+")").css({"background-image":"url('images/cover_m"+(i+1)+".png')", "background-repeat":"no-repeat", "background-size":"cover"});
    };
/*
    function cal_size(){
        
        var winWidth = $(window).width();
        if(winWidth>768){winWidth=768};
        var boxWidth = $(".recommend li").width();
        
        $(".recommend li").height(boxWidth*1.5);
        $("header").height(winWidth*0.1);
        $(".category").height(winWidth*0.12);
        $(".menu").height(winWidth*0.12);
        $(".bnb").height(winWidth*0.16);
        var num_line = Math.ceil(num_rec/3);
        var cont_height = (boxWidth*1.5+winWidth*0.0336*2)*num_line;
        $(".recommend").css({"margin-bottom": winWidth*0.16, "height":cont_height});
    }
    
    cal_size();

    $(window).on('resize', cal_size);
    */
});
