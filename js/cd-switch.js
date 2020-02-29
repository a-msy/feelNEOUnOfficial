$(function(){
    $('.hoshi-typeB').hide();
    $('.dream-typeB').hide();

    //星の下の僕らの話切り替えスイッチ
    $('#switch_hoshi').click(function(){
        if($('[name="hoshi"]').prop('checked')){
            $('.hoshi-typeB').show();
            $('.hoshi-typeA').hide();
        }else{
            $('.hoshi-typeB').hide();
            $('.hoshi-typeA').show();
        }
    });

    //僕は夢を嫌いにならない切り替えスイッチ
    $('#switch_dream').click(function(){
        if($('[name="dream"]').prop('checked')){
            $('.dream-typeB').show();
            $('.dream-typeA').hide();
        }else{
            $('.dream-typeB').hide();
            $('.dream-typeA').show();
        }
    });
});
