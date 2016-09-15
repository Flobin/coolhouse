  <footer class="footer" role="contentinfo">

    <div class="container">
      <p class="footer-item">
        <span class="copyright">
          © 2015 - 2016 <a href="//cool-house.nl">Coolhouse</a>
        </span>
      </p>
      <p class="footer-item">
        <a href="//www.facebook.com/CoolHouseScheveningen" id="facebook-link">
          <svg version="1.1" id="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 266.9 266.9" height="1em" width="1em" style="enable-background:new 0 0 266.9 266.9;" xml:space="preserve" preserveAspectRatio="xMidYMin slice">
            <path id="facebook-logo" d="M252.2,0H14.7C6.6,0,0,6.6,0,14.7v237.4c0,8.1,6.6,14.7,14.7,14.7h127.8V163.5h-34.8v-40.3h34.8V93.6c0-34.5,21.1-53.2,51.8-53.2c14.7,0,27.4,1.1,31.1,1.6v36l-21.3,0c-16.7,0-20,7.9-20,19.6v25.7H224l-5.2,40.3h-34.7v103.4h68c8.1,0,14.7-6.6,14.7-14.7V14.7C266.9,6.6,260.3,0,252.2,0z"/>
          </svg>
          <?php echo l::get('facebook') ?>
        </a>
      </p>
      <p class="footer-item">
        <span class="to-top">
          <a class="menu-link" href="#<?php echo l::get('coolhouse') ?>"><?php echo l::get('top') ?></a>
        </span>
      </p>
    </div>

  </footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="/assets/build/js/jquery-2.1.4.min.js"><\/script>')</script>
  <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA3b9pBpSLNDZoC6jt-kJXadoOxm-g5Jgo&sensor=false"></script>
  <script src="<?php echo l::get('jotform-prototype') ?>" type="text/javascript"></script>
  <script src="<?php echo l::get('jotform') ?>" type="text/javascript"></script>
  <script src="/assets/build/js/production.js"></script>
  <script src="//localhost:35729/livereload.js"></script>
  <!-- Facebook Conversion Code for Registrations - CoolHouse -->
  <script>(function() {
    var _fbq = window._fbq || (window._fbq = []);
    if (!_fbq.loaded) {
      var fbds = document.createElement('script');
      fbds.async = true;
      fbds.src = '//connect.facebook.net/en_US/fbds.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(fbds, s);
      _fbq.loaded = true;
    }
  })();
  window._fbq = window._fbq || [];
    window._fbq.push(['track', '6025307734898', {'value':'0.00','currency':'EUR'}]);
  </script>
  <noscript><img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/tr?ev=6025307734898&amp;cd[value]=0.00&amp;cd[currency]=EUR&amp;noscript=1" /></noscript>

</body>
</html>
