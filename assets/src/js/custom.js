document.onreadystatechange = function () {
      if (document.readyState == "complete") {
        var jq = jQuery.noConflict(),
            viewport = jq(window),
            html = jq('html'),
            root = jq('html, body'),
            menu = jq('.menu'),
            menuLink = jq('.menu-link'),
            article = jq('.homepage-article'),
            input = jq(".input"),
            pano = jq(".panorama"),
            slabHeadline = jq(".slab-headline"),
            swipebox = jq(".swipebox"),
            unit = jq(".unit");

        var browserName = bowser.name.replace(/\s+/g, '');
        html.addClass(browserName);

        menuLink.click(function() {
          var offset;
          var href = jq.attr(this, 'href');
          if (viewport.width() <= 480) {
            offset = 84;
          } else if (viewport.width() <= 768) {
            offset = 96;
          } else if (viewport.width() <= 1024) {
            offset = 108;
          } else {
            offset = 120;
          }
          if (href ==="#Coolhouse") {
            offset = 0;
          }
          root.stop(true,true).animate({
              scrollTop: jq(href).position().top-offset+'px'
          }, 500, function () {
              window.location.hash = href;
          });
          return false;
        });

        var header = document.getElementById('site-header');
        sticky(header);
        if (/^#/.test(window.location.hash)) {
          header.className = "stuck header";
        }

        var slabTextHeadlines = function() {
          slabHeadline.slabText({
            "viewportBreakpoint":319
          });
          if (document.createEvent) { // W3C
              var ev = document.createEvent('Event');
              ev.initEvent('resize', true, true);
              window.dispatchEvent(ev);
              //console.log("W3C resize fired");
          } else { // IE
              document.fireEvent('onresize');
              //console.log("IE resize fired");
          }
        };
        Typekit.load({
          active: slabTextHeadlines()
        });


        pano.ddpanorama({width:1300, height:500, loop:false, startPos:0.79, minSpeed: -10, bounceEdgeColor: '#ffffff'});


        article.scrollSpy();
        article.on('scrollSpy:enter', function() {
          //console.log('enter:', jq(this).attr('id'));
          jq('.active').removeClass('active');
          menu.find("a[href*='#" + this.id + "']" ).addClass('active');
        });
        /*article.on('scrollSpy:exit', function() {
          console.log('exit:', jq(this).attr('id'));
        });*/


        var initMap = function() {
          var mapOptions = {
              zoom: 17,
              center: new google.maps.LatLng(52.096875, 4.2679705),
              scrollwheel: false,
              styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"simplified"},{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#e2e2e2"},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#008bff"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.station.rail","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#4d88c2"},{"visibility":"simplified"}]}]
          };
          var mapElement = document.getElementById('locatie-map');
          var map = new google.maps.Map(mapElement, mapOptions);
          var marker = new google.maps.Marker({
              position: new google.maps.LatLng(52.096310, 4.267894),
              map: map,
              title: 'Het Coolhouse'
          });
        }
        initMap();

        function addImageToHref(size) {
            var href = jq(this).attr("href");
            jq(this).attr("href", href + size + '.jpg');
        }

        if (viewport.width <= 480) {
            swipebox.each( function() {
                addImageToHref.call(this, "s");
            });
        } else if (viewport.width <= 768) {
            swipebox.each( function() {
                addImageToHref.call(this, "m");
            });
        } else if (viewport.width <= 1024) {
            swipebox.each( function() {
                addImageToHref.call(this, "l");
            });
        } else if (viewport.width <= 1200) {
            swipebox.each( function() {
                addImageToHref.call(this, "xl");
            });
        } else {
            swipebox.each( function() {
                addImageToHref.call(this, "xxl");
            });
        }
        swipebox.swipebox(
            {
                loopAtEnd: true,
            }
        );

        // unit.on("click", function() {
        //     unit.removeClass("unitfocus");
        //     $(this).addClass("unitfocus");
        // })


        var overview = document.getElementById("overview-svg");
    	// Get the SVG document inside the Object tag
    	var svg = overview.contentDocument;
    	// Get the SVG elements by class
    	var units = svg.getElementsByClassName("unit");
        // make them an array
        var unitsAsArray = Array.prototype.slice.call(units);

        var lastClicked = svg.getElementById("P8");

        unitsAsArray.forEach(function(element){
            element.addEventListener("click", function() {
                console.log("unit clicked");
                //remove class from last focused unit
                lastClicked.classList.remove("unitfocus");
                //add class to this units
                element.classList.add("unitfocus");
                lastClicked = element;
            })
        }, this)


        input.focus(function() {
          jq(this).parent().addClass("input-focus");
        });
        input.blur(function() {
          if (jq(this).val() == '') {
            jq(this).parent().removeClass("input-focus");
          }
        });

        JotForm.init(function(){
          JotForm.onSubmissionError="jumpToSubmit";
        });

      };
    };

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-62944529-2', 'auto');
    ga('send', 'pageview');
