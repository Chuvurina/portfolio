$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#flip1").click(function(){
        $("#panel1").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#flip-search").click(function(){
        $("#panel-search").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#flip-men").click(function(){
        $("#panel-men").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#flip-women").click(function(){
        $("#panel-women").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#flip-kids").click(function(){
        $("#panel-kids").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#flip-sale").click(function(){
        $("#panel-sale").slideToggle("slow");
    });
});
$(document).ready(function(){
    var $menu = $("#menu");
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 66 && $menu.hasClass("default") ){
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("default")
                           .addClass("fixed transbg")
                           .fadeIn('fast');
                });
            } else if($(this).scrollTop() <= 66 && $menu.hasClass("fixed")) {
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("fixed transbg")
                           .addClass("default")
                           .fadeIn('fast');
                });
            }
        });
    });