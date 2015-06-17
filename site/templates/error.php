<?php snippet('header') ?>

  <main class="main" role="main" id="main">

    <article>
      <h1 class="h2 container"><?php echo $page->title()->html() ?></h1>
      <?php echo $page->text()->kirbytext() ?>

    </article>

  </main>

<?php snippet('footer') ?>