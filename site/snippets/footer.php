  <footer class="footer" role="contentinfo">

    <p>
      <span class="copyright">
        © 2015 <a href="//cool-house.nl">Cool-house</a>
      </span>
      <span class="to-top">
        <a class="menu-link" href="#<?php echo l::get('coolhouse') ?>"><?php echo l::get('top') ?></a>
      </span>
    </p>

  </footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="/assets/build/js/jquery-2.1.4.min.js"><\/script>')</script>
  <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA3b9pBpSLNDZoC6jt-kJXadoOxm-g5Jgo&sensor=false"></script>
  <?php echo js('/assets/build/js/production.min.js') ?>
  <script>
    //'use strict';
    document.onreadystatechange = function () {
      if (document.readyState == "complete") {
        var root = $('html, body'),
            menu = $('.menu'),
            menuLink = $('.menu-link'),
            article = $('.homepage-article'),
            input = $(".input"),
            pano = $(".panorama");

        menuLink.click(function() {
          var href = $.attr(this, 'href');
          root.stop(true,true).animate({
              scrollTop: $(href).position().top
          }, 500, function () {
              window.location.hash = href;
          });
          return false;
        });

        var header = document.getElementById('site-header')
        sticky(header);

        var slabTextHeadlines = function() {
          $(".slab-headline").slabText({
            // Don't slabtext the headers if the viewport is under 380px
            "viewportBreakpoint":479
          });
        }
        Typekit.load({
          active: slabTextHeadlines()
        });


        pano.ddpanorama({width:1300, height:500, loop:false, startPos:0.79, minSpeed: -10});



        article.on('scrollSpy:enter', function() {
          console.log('enter:', $(this).attr('id'));
          $('.active').removeClass('active');
          menu.find('a[href="#' + this.id + '"]').addClass('active');
        });
        article.on('scrollSpy:exit', function() {
          console.log('exit:', $(this).attr('id'));
        });
        article.scrollSpy();

        var initMap = function() {
          var mapOptions = {
              zoom: 17,
              center: new google.maps.LatLng(52.096875, 4.2679705),
              scrollwheel: false,
              styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#006bff"},{"lightness":"-3"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"on"},{"hue":"#006bff"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#fffefe"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"},{"hue":"#006bff"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"hue":"#006bff"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#3e75b7"},{"visibility":"on"}]}]
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

        input.focus(function() {
          $(this).addClass("input-focus");
        });
        input.blur(function() {
          if ($(this).val() == '') {
            $(this).removeClass("input-focus");
          }
        });

      };
    };

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-62944529-2', 'auto');
    ga('send', 'pageview');
    
  </script>
  <script src="//localhost:35729/livereload.js"></script>

</body>
</html>