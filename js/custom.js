$(function(){
    $('.submit_search').on('click', function(){
        var inputSearch = $('form[name=search-form] input[name=s]');
        var valorBusca = inputSearch.val();
        if(valorBusca == '' || valorBusca == null){
            inputSearch.focus();
            return false;
        }
    });
    
    $('.submit_search_mobile').on('click', function(){
        var inputSearchMobile = $('form[name=search-form-mobile] input[type=search]');
       
        $('.nav-search-mob').css('opacity', 0).removeClass('hide').animate({'opacity' : 1});
        inputSearchMobile.focus();
        
    });
    
    $('form[name=search-form-mobile] input[type=search]').focusout(function(){
            $('.nav-search-mob').animate({'opacity' : 0}, function(){$(this).addClass('hide')});
        });
    
});