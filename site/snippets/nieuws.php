<div class="fullwidth section-cover" id="nieuws-cover">
	<h2 class="section-title"><?php echo $data->title()->html() ?></h2>
  <div class="cover-clip">
    <div class="cover-img">
    </div>
  </div>
</div>
<article id="Nieuws" class="homepage-article">
  <section>
  <?php foreach($site->page('nieuws')->children()->visible()->flip() as $article): ?>

  <article>
    <h3><?php echo $article->title()->html() ?></h3>
    <p><?php echo $article->text()->excerpt(300) ?></p>
    <p><a href="<?php echo $article->url() ?>"><?php echo l::get('readmore') ?></a></p>
  </article>

  <?php endforeach ?>
  </section>
</article>
