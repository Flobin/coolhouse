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
        var root = $('html, body');
        $('.menu-link').click(function() {
          var href = $.attr(this, 'href');
          root.animate({
              scrollTop: $(href).offset().top
          }, 500, function () {
              window.location.hash = href;
          });
          return false;
        });

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

        var header = document.getElementById('site-header')
        // make '.nav' stick to the top
        sticky(header);

        var article = $('article');
        article.on('scrollSpy:enter', function() {
          console.log('enter:', $(this).attr('id'));
          var menu = $('.menu');
          menu.find('a[href="#' + this.id + '"]').addClass('active');
        });

        article.on('scrollSpy:exit', function() {
          console.log('exit:', $(this).attr('id'));
          var activeLink = $('.active');
          activeLink.removeClass('active');
        });

        article.scrollSpy();
      };
    }
    
  </script>
  <script src="//localhost:35729/livereload.js"></script>

</body>
</html>