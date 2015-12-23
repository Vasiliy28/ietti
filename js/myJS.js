/**
 * Created by vasy on 22.12.15.
 */
var backImg=$('#back img');
function chengHeight(){
    var backImgHeigth=backImg.css('height');
    var headerPage = $('#headerPage');
    headerPage.css('height',backImgHeigth);
};

$(window).ready(chengHeight());
$(window).on('resize',chengHeight);

$(window).scroll(function(){
    var st =$(this).scrollTop();
    console.log(st);

    $('#back').css({
        "transform":"translate(0% , " + st/15 + "%"    })

})
