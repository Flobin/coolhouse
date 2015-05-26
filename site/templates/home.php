<?php snippet('header') ?>

  <div id="cover">
    <figure id="cover-logo">
      <img src="/assets/build/img/logo-wit.svg" alt="Coolhouse logo" id="cover-logo-img"/>
    </figure>
  </div>

  <main class="main" role="main" id="main">

    <?php foreach($pages->visible() as $section): ?>
    <?php snippet($section->uid(), array('data' => $section)); ?>
    <?php endforeach ?>

  </main>

<?php snippet('footer') ?>