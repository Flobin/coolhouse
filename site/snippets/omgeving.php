<div class="fullwidth section-cover" id="omgeving-cover">
	<h2 class="section-title"><?php echo $data->title()->html() ?></h2>
	<div class="cover-clip">
		<div class="cover-img">
    	</div>
	</div>
</div>
<article id="<?php echo l::get('omgeving') ?>" class="homepage-article">
  <?php echo $data->text()->kirbytext() ?>
</article>