<?php snippet('header') ?>

  <main class="main" role="main" id="main">

    <article>
      <h1><?php echo $page->title()->html() ?></h1>
      <?php echo $page->text()->kirbytext() ?>

      <a href="/#Nieuws">Back…</a>

    </article>

  </main>

<?php snippet('footer') ?>