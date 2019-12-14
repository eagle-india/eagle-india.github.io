
var deleteLog = false;
$(document).ready(function() {
    $('#pagepiling').pagepiling({
        direction:'horizontal',
        menu: '#menu',
        anchors: ['welcome', 'aboutMe', 'skills', 'websitePlatforms', 'WhatIDo',  'contactMe', 'section9'],
        sectionsColor: ['#2ebe21', '#dad8d8', '#51bec4','#2ebe21', '#2C3E50', '#39C','#2ebe21', '#51bec4'],
        loopTop: true,
        loopBottom: true
    });
});

// Initialisation canvas




/*

$(window).bind('mousewheel', function(e){
   if($('#skills').hasClass("active"))
    {
        var i = 0;
        var count1get = $('#count1get').text();
        var count2get = $('#count2get').text();
        var count3get = $('#count3get').text();
        var count4get = $('#count4get').text();
        count1get = count1get.slice(0,-1);
        count2get = count2get.slice(0,-1);
        count3get = count3get.slice(0,-1);
        count4get = count4get.slice(0,-1);
        if (i == 0)
        {
            i = 1;
            var elem1 = document.getElementById("count1set");
            var elem2 = document.getElementById("count2set");
            var elem3 = document.getElementById("count3set");
            var elem4 = document.getElementById("count4set");
            var width = 0;
            var id = setInterval(frame, 10);
            function frame()
            {
                if (width > count4get && width > count3get && width > count2get && width > count1get)
                {
                    clearInterval(id);
                    i = 0;
                }
                else
                {
                    if (width <= count1get)
                        {
                             elem1.innerHTML = width  + "%";
                        }
                    if (width <= count2get)
                        {
                            elem2.innerHTML = width  + "%";
                        }
                    if (width <= count3get)
                        {
                             elem3.innerHTML = width  + "%";
                        }
                    if (width <= count4get)
                        {
                             elem4.innerHTML = width  + "%";
                        }
                    width++;


                }
            }
        }
    }
});*/

$(window).on("load", function (e) {
    //preLoader
    $(".preLoader").fadeOut("slow");
    //mCustomScrollbar
    $(".content_1").mCustomScrollbar({
					scrollButtons:{
						enable:true
					},
                    autoHideScrollbar:true,
					theme:"light-thin"
				});
    $("a[rel='load-content']").click(function(e){
        e.preventDefault();
        var $this=$(this),
            url=$this.attr("href");
        $this.addClass("loading");
        $.get(url,function(data){
            $this.removeClass("loading");
            $(".content_1 .mCSB_container").html(data); //load new content inside .mCSB_container
            $(".content_1").mCustomScrollbar("update"); //update scrollbar according to newly loaded content
            $(".content_1").mCustomScrollbar("scrollTo","top",{scrollInertia:200}); //scroll to top
        });
    });
    $("a[rel='append-content']").click(function(e){
        e.preventDefault();
        var $this=$(this),
            url=$this.attr("href");
        $this.addClass("loading");
        $.get(url,function(data){
            $this.removeClass("loading");
            $(".content_1 .mCSB_container").append(data); //append new content inside .mCSB_container
            $(".content_1").mCustomScrollbar("update"); //update scrollbar according to newly appended content
            $(".content_1").mCustomScrollbar("scrollTo","h2:last",{scrollInertia:2500,scrollEasing:"easeInOutQuad"}); //scroll to appended content
        });
    });

});
