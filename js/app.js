jQuery(function ($) {
    // Open Menu Bar
    $(".mob_menu_btn").click(function(){
        $("body").addClass("bodyMenuOpen");
        $(".main_nav").addClass("main_nav_open");
        $(".responsiveOverlay").addClass("responsiveOverlay_on");
    });

    // Close Menu Bar
    $(".responsiveOverlay").click(function(){
        $("body").removeClass("bodyMenuOpen");
        $(".main_nav").removeClass("main_nav_open");
        $(".responsiveOverlay").removeClass("responsiveOverlay_on");
        $(".main_header").css({"z-index": "10"})
    });

    // Sub Menu
    $('.main_nav ul ul').each(function() {
        if($(this).children().length){
            $(this,'li:first').parent().append('<span class="mean-expand"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></span>');
        }
    });
    $('.mean-expand').on("click",function(e){
        e.preventDefault();
            if ($(this).hasClass("mean-clicked")) {
                $(this).prev('ul').slideUp(300, function(){});
        } else {
                $(this).prev('ul').slideDown(300, function(){});
        }
        $(this).toggleClass("mean-clicked");
    });




})