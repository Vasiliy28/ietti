$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
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
            $("#header").toggleClass('active')
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
            $("header.headerSection h1").animated("slideInRight","slideOutRight",50,0)
            $("header.headerSection h3").animated("slideInRight","slideOutRight",50,0)
            $("header.headerSection div").animated("slideInRight","slideOutRight",50,30)
            $("#input-1").animated("slideInRight","slideOutRight",50,0)
            $("#input-2").animated("slideInLeft","slideOutLeft",50,0)
            $("#text-1").animated("slideInRight","slideOutRight",145,-30)
            $(".buttonContactUs").animated("slideInLeft","slideOutLeft",50,0)
            $("#welcomeLog").animated("flipInY","flipOutY",60,-30)
            $('.leftHistory .history').animated("fadeInLeft","fadeOutDown",50,-50)
            $('.rightHistory .history').animated("fadeInRight","fadeOutDown",50,-50)
            $('.headerSectionLight').animated("rollIn","rollOut",50,-150)
            $('.ourHistoryContent > div > header ').animated("bounceIn","bounceOut",20,15)
            $('.workMenu').animated("fadeInLeft","fadeOutLeft",30,50)
            $(".aboutCenter").animated("zoomIn","zoomOut",-100,-250)
            $(".aboutLeft").animated("fadeInLeft","fadeOutLeft",30,-300)
            $(".aboutRight").animated("fadeInRight","fadeOutRight",30,-300)
            $(".contactUsBox").animated("zoomIn","zoomOut",20,0)
            $('.contactUs header').animated('slideInDown','slideOutUp',20,-100)
            $('.ourTeamLeft figure').animated("fadeInLeft","zoomOut",20,-20)
            $('.ourTeamRight figure').animated("fadeInRight","zoomOut",20,-20)
            $('.priceing').animated("zoomIn","zoomOut",-100 , -50)
            $('.welcomeContentLeft').animated("zoomInLeft","zoomOutLeft",20,-50)
            $('.welcomeContentRight').animated("zoomInRight","zoomOutRight",-20,-50)
        }
        $('.aboutCenter').waypoint(function(){
            console.log("okr")
        })
        $('.aboutLeft').waypoint(function(){
            console.log("okl")
        })
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

        function stickyHeader () {
            var headerScrollPos = $('#header').next().offset().top;
            var header = $('#header');
            if($(window).scrollTop() > headerScrollPos) {
                header.addClass('move');
            }
            else if($(this).scrollTop() <= headerScrollPos) {
                header.removeClass('move');
            }
        }



        function hiddenHeader(){
            var header=$('#header');
            if($(window).width()>767) {
                if(header.hasClass('headerHidden')){
                    header.removeClass('headerHidden')
                }
                else return;

            }
            else {
                header.addClass('headerHidden');
                header.removeClass('move')
            }
        }
        $(window).resize(function(){
            hiddenHeader()
        });
        hiddenHeader();
        if($(window).width()>767){
            stickyHeader();
        }

        $(window).on('scroll', function () {
            console.log($(window).width())
            if($(window).width()>767){
                stickyHeader();
            }
            else return



        });

        $(".itemPage a").mPageScroll2id({
            offset:59
        });

    })

