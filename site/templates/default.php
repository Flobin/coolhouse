<?php snippet('header') ?>

  <main class="main" role="main">

    <article class="text">
      <h1><?php echo $page->title()->html() ?></h1>
      <?php echo $page->text()->kirbytext() ?>
    </article>

  </main>

<?php snippet('footer') ?>