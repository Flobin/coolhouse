  <footer class="footer" role="contentinfo">

    <div class="copyright">
      <?php echo $site->copyright()->kirbytext() ?>
    </div>

    <div class="colophon">
      <a href="http://getkirby.com/made-with-kirby-and-love"><?php echo l::get('made-with') ?></a>
    </div>

  </footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="/assets/build/js/jquery-2.1.4.min.js"><\/script>')</script>
  <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA3b9pBpSLNDZoC6jt-kJXadoOxm-g5Jgo&sensor=false"></script>
  <?php echo js('/assets/build/js/production.js') ?>
  <script>
    'use strict';
    document.onreadystatechange = function () {
      if (document.readyState == "complete") {
        var root = $('html, body'),
            menu = $('.menu'),
            article = $('.homepage-article');
        $('.menu-link').click(function() {
          var href = $.attr(this, 'href');
          root.stop(true,true).animate({
              scrollTop: $(href).position().top
          }, 500, function () {
              window.location.hash = href;
          });
          return false;
        });

        var header = document.getElementById('site-header')
        // make '.nav' stick to the top
        sticky(header);

        //var nav = document.getElementById('nav');
        //sticky(nav);
        //window.fitText( document.getElementById("responsive-headline") );
        var slabTextHeadlines = function() {
          $(".slab-headline").slabText({
            // Don't slabtext the headers if the viewport is under 380px
            "viewportBreakpoint":479
          });
        }
        Typekit.load({
          active: slabTextHeadlines()
        });

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
          // Basic options for a simple Google Map
          // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
          var mapOptions = {
              // How zoomed in you want the map to start at (always required)
              zoom: 17,

              // The latitude and longitude to center the map (always required)
              center: new google.maps.LatLng(52.096875, 4.2679705), // New York

              scrollwheel: false,
              // How you would like to style the map. 
              // This is where you would paste any style found on Snazzy Maps.
              styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"simplified"},{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#00a1ff"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.station.rail","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#61c5ff"},{"visibility":"simplified"}]}]
          };

          // Get the HTML DOM element that will contain your map 
          // We are using a div with id="map" seen below in the <body>
          var mapElement = document.getElementById('locatie-map');

          // Create the Google Map using our element and options defined above
          var map = new google.maps.Map(mapElement, mapOptions);


          // Let's also add a marker while we're at it
          var marker = new google.maps.Marker({
              position: new google.maps.LatLng(52.096310, 4.267894),
              map: map,
              title: 'Het Coolhouse'
          });
        }
        initMap();

      };
    }
    
  </script>
  <script src="//localhost:35729/livereload.js"></script>

</body>
</html>