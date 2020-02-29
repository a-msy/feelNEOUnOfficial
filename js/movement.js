//色々動きをつけるためのjQuery 
//トップページのバー
$(function(){
    $('.content-cds').hover(function(){
        $hovernow1 = true;
        $hover1 = $(this);
        $(this).find('.my-parts').css('transform', 'skew(10deg)');
        $(this).find('.my-parts > span').css('transform', 'skew(-10deg)');
        setTimeout(function(){
            if( $hovernow1 == true ){
                $hover1.find('.my-parts').css('flex', '0 0 120%');
                $hover1.find('.my-parts').css('max-width', '120%');
            }
        },500);
    }, function(){
        $(this).find('.my-parts').css('transform', 'skew(-10deg)');
        $(this).find('.my-parts > span').css('transform', 'skew(10deg)');
        $(this).find('.my-parts').css('flex', '0 0 50%');
        $(this).find('.my-parts').css('max-width', '50%');
        $hovernow1 = false;
    });

    $('.content-movies').hover(function(){
        $hovernow2 = true;
        $hover2 = $(this);
        $(this).find('.my-parts').css('transform', 'skew(10deg)');
        $(this).find('.my-parts > span').css('transform', 'skew(-10deg)');
        setTimeout(function(){
            if( $hovernow2 == true ){
                $hover2.find('.my-parts').css('flex', '0 0 120%');
                $hover2.find('.my-parts').css('max-width', '120%');
            }
        },500);
    }, function(){
        $(this).find('.my-parts').css('transform', 'skew(-10deg)');
        $(this).find('.my-parts > span').css('transform', 'skew(10deg)');
        $hover2.find('.my-parts').css('flex', '0 0 50%');
        $hover2.find('.my-parts').css('max-width', '50%');
        $hovernow2 = false;
    });

    $('.content-lyrics').hover(function(){
        $hovernow3 = true;
        $hover3 = $(this);
        $(this).find('.my-parts').css('transform', 'skew(10deg)');
        $(this).find('.my-parts > span').css('transform', 'skew(-10deg)');
        setTimeout(function(){
            if( $hovernow3 == true ){
                $hover3.find('.my-parts').css('flex', '0 0 120%');
                $hover3.find('.my-parts').css('max-width', '120%');
            }
        },500);
    }, function(){
        $(this).find('.my-parts').css('transform', 'skew(-10deg)');
        $(this).find('.my-parts > span').css('transform', 'skew(10deg)');
        $hover3.find('.my-parts').css('flex', '0 0 50%');
        $hover3.find('.my-parts').css('max-width', '50%');
        $hovernow3 = false;
    });
});

//ふわっとさせる
$(function(){
window.onload = function(){
    scroll_effect();
    fadein_effect();
};

$(window).scroll(function(){
    scroll_effect();
});

function scroll_effect(){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
}

//TOPページのみ
function fadein_effect(){
    $('.fadein1').css('opacity', '1');
    $('.fadein1').css('transform', 'translateY(0)');
    setTimeout(function(){
        $('.fadein2').css('opacity', '1');
        $('.fadein2').css('transform', 'translateY(0)');     
    },300);
    setTimeout(function(){
        $('.fadein3').css('opacity', '1');
        $('.fadein3').css('transform', 'translateY(0)');     
    },600);
}
});