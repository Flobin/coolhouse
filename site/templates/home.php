<?php snippet('header') ?>

  <div id="cover">
    <figure id="cover-logo">
      <img src="/assets/build/img/logo-wit.svg" alt="Coolhouse logo" id="cover-logo-img"/>
    </figure>
  </div>

  <main class="main" role="main" id="main">

    <article class="text">
      <?php echo $page->text()->kirbytext() ?>
    </article>

  </main>

<?php snippet('footer') ?>