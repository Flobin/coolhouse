<div class="fullwidth section-cover" id="contact-cover">
  <div class="section-title-container">
    <h2 class="section-title"><?php echo $data->title()->html() ?></h2>
  </div>
	<div class="cover-clip">
		<div class="cover-img">
    </div>
	</div>
</div>
<article id="<?php echo l::get('contact') ?>" class="homepage-article">
  <section>
  	<?php echo $data->text()->kirbytext() ?>
  </section>
  
</article>
