jQuery(document).ready(function(){
    $('ul.menu-links li').click(function(){
        var tab_id = $(this).attr('data-tab');
        
        $('ul.menu-links li').removeClass('current');
        $('.tab-content').removeClass('active');

        $(this).addClass('current');
        $("#"+tab_id).addClass('active');
    });
});