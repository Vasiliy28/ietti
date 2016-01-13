$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
    $(window).ready(function(){
        'use strict'
        console.log($(window).height());
        $('.popup').magnificPopup({
            type: 'image'
        });




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
        $(window).ready(function (){
            centre();
        })


        $('#allWorks').mixItUp({
            callbacks: {
                onMixEnd: function(){
                    animateCss()
                }
            }
        });
        $(window).resize(function () {
            centre()
        })
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
            $('.leftContentHistory .history').animated("fadeInLeft","fadeOutDown",50,-50)
            $('.rightContentHistory .history').animated("fadeInRight","fadeOutDown",50,-50)
            $('.headerSectionLight').animated("rollIn","rollOut",50,-150)
            $('.ourHistoryContent > div > header ').animated("bounceIn","bounceOut",20,15)
            $('.workMenu').animated("fadeInLeft","fadeOutLeft",30,50)
            $(".aboutUsContentCenter").animated("zoomIn","zoomOut",-100,-250)
            $(".aboutUsContentLeft").animated("fadeInLeft","fadeOutLeft",30,-300)
            $(".aboutUsContentRight").animated("fadeInRight","fadeOutRight",30,-300)
            $(".contactUsBox").animated("zoomIn","zoomOut",20,0)
            $('.contactUs header').animated('slideInDown','slideOutUp',20,-100)
            $('.ourTeamLeft figure').animated("fadeInLeft","zoomOut",20,-20)
            $('.ourTeamRight figure').animated("fadeInRight","zoomOut",20,-20)
            $('.priceing').animated("zoomIn","zoomOut",-100 , -120)
            $('.welcomeContentLeft').animated("zoomInLeft","zoomOutLeft",20,-50)
            $('.welcomeContentRight').animated("zoomInRight","zoomOutRight",-20,-50)
        }
        $('.aboutUsContentCenter').waypoint(function(){
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
        currentPage()
        function currentPage(){
            var nav=$('#navPage .itemPage li');
            nav.children('a').on('click',function(){
                nav.removeClass('click')
                $(this).parent().addClass('click')
                if($(window).width()<767){
                    $("#header").toggleClass('active')
                    $('#hamburger-icon').toggleClass('active')
                }

            });
            $('body > section').waypoint(function(dir){
                if (dir === "down"){
                    var hash=$(this).attr('id');
                    nav.removeClass('active')

                    $.each(nav,function(){
                        if($(this).children('a').attr('href').slice(1) == hash){
                            $(this).addClass('active')
                            $(this).removeClass('click')

                        }
                    })
                }
                else return;
            },{offset:'30%'}).waypoint(function(dir){
                if (dir === "up"){
                    var hash=$(this).attr('id');
                    nav.removeClass('active')
                    $.each(nav,function(){
                        if($(this).children('a').attr('href').slice(1) == hash){
                            $(this).addClass('active')
                            $(this).removeClass('click')

                            console.log('ok')
                        }
                    })
                }
                else return;

            },{offset:"-50%"})
        }
        $( document ).ready(function() {
            var hamburger = $('#hamburger-icon');
            hamburger.click(function() {

                    hamburger.toggleClass('active');
                    $("#header").toggleClass('active')
                    return false;


            });
        });



    })

