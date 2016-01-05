
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
                "transform":"translate(0% , " + st/15 + "%"    });

        })
        $(window).scroll(function(){
            var st =$(this).scrollTop();

            $('.wrapperContactUs .back').css({
                "transform":"translate(0% , " + st/50 + "%"    });

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
            var b =  $("#mainLinkWrap");
            var w = b.width();
            console.log(w/2)
            b.css("margin-left",-(w/2))
        }
        function animateCss(){
            $(".ourWork header h1").animated("slideInRight","slideOutRight",50,0)
            $(".ourWork header h3").animated("slideInRight","slideOutRight",50,0)
            $(".ourWork header div").animated("slideInRight","slideOutRight",50,30)
            $(".text").animated("slideInRight","slideOutRight",145,-250)
            $(".input").animated("slideInLeft","slideOutLeft",100,0)
            $("#welcomeLog").animated("flipInY","flipOutY")
        }

        $(".inputField").each(function(){


            if ($(this).val() !== '' || $(this).val().match(/\S/g)!==null) {

                var par = $(this).parent();
                par.addClass('inputFilled')
            }

            $(this).on("focus", function () {
                var par = $(this).parent();
                par.addClass('inputFilled')
            })

            $(this).on("blur",function(){
                if($(this).val()=='' || $(this).val().match(/\S/g)==null){
                    $(this).val("")
                    var par =  $(this).parent();
                    par.removeClass('inputFilled')
                }
                else {
                    return
                }
            })
        })


        $(window).load(function(){
            $(".twentytwenty-container").twentytwenty({

            });
        });

    })

