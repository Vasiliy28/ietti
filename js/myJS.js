
    $(window).ready(function(){
        'use strict'


        function chengHeight() {
            var backImg = $('#back img');
            backImg.css("max-height",$(window).height())
            var backImgHeigth = backImg.css('height');
            var headerPage = $('#headerPage');
            headerPage.css('height', backImgHeigth);
        };

        chengHeight();
        $(window).on('resize',chengHeight);

        $(window).scroll(function(){
            var st =$(this).scrollTop();

            $('#back').css({
                "transform":"translate(0% , " + st/15 + "%"    })

        })
        $("#togNav").click(function(){
            $("#navPage").toggleClass('active')
        })
        centre();

        $('#allWorks').mixItUp({
            callbacks: {
                onMixEnd: function(){

                    animateCss()

                }
            }
        });

        function centre(){
            var b =  $(".mainLinkWrap");
            var w = b.width();
            console.log(w/2)
            b.css("margin-left",-(w/2))
        }
        function animateCss(){
            $(".ourWork header h1").animated("slideInRight","slideOutRight",50,0)
            $(".ourWork header h3").animated("slideInRight","slideOutRight",50,0)
            $(".ourWork header div").animated("slideInRight","slideOutRight",50,30)
        }

    })
