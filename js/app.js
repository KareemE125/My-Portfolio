(function main(){
    $('#bk-top').fadeOut(1)

    $(window).on('scroll',function(){
        if($(this).scrollTop() >= $('#about').offset().top)
        {
            $('#bk-top').fadeIn(500);
        }
        else
        {     
            $('#bk-top').fadeOut(500);    
        }
    })
})()