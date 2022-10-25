jQuery(document).ready(function(){
    $('ul.menu-links li').click(function(){
        var tab_id = $(this).attr('data-tab');
        
        $('ul.menu-links li').removeClass('current');
        $('.tab-content').removeClass('active');

        $(this).addClass('current');
        $("#"+tab_id).addClass('active');
    });

    $('ul.tab-nav li').click(function(){
        var tabid = $(this).attr('data-nav');

        $('section.active .tab-nav li').removeClass('on');
        $('section.active .tab-contents').removeClass('on');

        $(this).addClass('on');
        $('section.active #'+tabid).addClass('on');
    })
});