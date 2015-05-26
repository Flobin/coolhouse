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
  <?php echo js('/assets/build/js/production.js') ?>
  <script>
    'use strict';
    document.onreadystatechange = function () {
      if (document.readyState == "complete") {
        //var nav = document.getElementById('nav');
        //sticky(nav);
        //window.fitText( document.getElementById("responsive-headline") );
        var slabTextHeadlines = function() {
          $("h1").slabText({
            // Don't slabtext the headers if the viewport is under 380px
            "viewportBreakpoint":479
          });
        }
        Typekit.load({
          active: slabTextHeadlines()
        });
      };
    }
    
  </script>
  <script src="//localhost:35729/livereload.js"></script>

</body>
</html>