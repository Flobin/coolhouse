<div class="fullwidth section-cover" id="contact-cover">
  <h2 class="section-title"><?php echo $data->title()->html() ?></h2>
	<div class="cover-clip">
		<div class="cover-img">
    </div>
	</div>
</div>
<article id="Contact" class="homepage-article">
  <section>
  	<?php echo $data->text()->kirbytext() ?>
  </section>
  <section>

    <form id="form1" name="form1" class="wufoo leftLabel page" accept-charset="UTF-8" autocomplete="off" enctype="multipart/form-data" method="post" novalidateaction="https://davlstudio.wufoo.com/forms/z1ttbb0b1a5821v/#public">
    <p class="indicates-required"><span class="asterisk">*</span> <?php echo l::get('required') ?></p>
      <div class="field-group">
        <input id="Field7" name="Field7" type="text" class="field text fn input" tabindex="1" required>
        <label class="label" for="Field7">
          <span class="label-content"><?php echo l::get('firstname') ?><span id="req_7" class="req">*</span></span>
        </label>
      </div>
      <div class="field-group">
        <input id="Field8" name="Field8" type="text" class="field text ln input" value="" size="14" tabindex="2" required >
        <label class="label" for="Field8">
          <span class="label-content"><?php echo l::get('lastname') ?><span id="req_8" class="req">*</span></span>
        </label>
      </div>
      <div class="field-group last-group">
        <input id="Field9" name="Field9" type="email" spellcheck="false" class="field text medium input" value="" maxlength="255" tabindex="3" required >
        <label class="label" id="title9" for="Field9">
          <span class="label-content"><?php echo l::get('email') ?><span id="req_9" class="req">*</span></span>
        </label>
      </div>
      <div class="field-group">
        <textarea id="Field11" name="Field11" class="field textarea small input" spellcheck="true" rows="10" cols="50" tabindex="4" onkeyup=""></textarea>
        <label class="desc" id="title11" for="Field11">
          <span class="label-content">Eventuele vraag</span>
        </label>
      </div>
      <input id="saveForm" name="saveForm" class="btTxt submit" type="submit" value="<?php echo l::get('submit') ?>" >
      <div class="hide">
        <label for="comment">Do Not Fill This Out</label>
        <textarea name="comment" id="comment" rows="1" cols="1" class="hide"></textarea>
        <input style="position: absolute; left: -5000px; opacity: 0;" type="hidden" id="idstamp" name="idstamp" value="fXdEgTHgXdoQ7neVTO9YlidZLbSN34fSZr04q4sFCMY=" >
      </div>
    </form>

  </section>
</article>
