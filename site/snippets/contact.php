<div class="fullwidth section-cover" id="contact-cover">
	<div>
		<h2 class="section-title"><?php echo $data->title()->html() ?></h2>
	</div>
</div>
<article id="Contact" class="homepage-article">
  <section>
  	<?php echo $data->text()->kirbytext() ?>
  </section>
  <section>
    <!-- Begin MailChimp Signup Form -->
    <div id="mc_embed_signup">
      <form action="//cool-house.us11.list-manage.com/subscribe/post?u=b2ec7f81b5575c608e25383a8&amp;id=5fccc97032" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
          <div class="indicates-required"><span class="asterisk">*</span> <?php echo l::get('required') ?></div>
          <div class="mc-field-group">
            <input type="email" value="" name="EMAIL" class="required email mc-input" id="mce-EMAIL">
            <label class="mc-label" for="mce-EMAIL"><span class="mc-label-content"><?php echo l::get('email') ?><span class="asterisk">*</span></span>
            </label>
          </div>
          <div class="mc-field-group">
            <input type="text" value="" name="FNAME" class="required mc-input" id="mce-FNAME">
            <label class="mc-label" for="mce-FNAME"><span class="mc-label-content"><?php echo l::get('firstname') ?> <span class="asterisk">*</span></span>
            </label>
          </div>
          <div class="mc-field-group">
            <input type="text" value="" name="LNAME" class="mc-input" id="mce-LNAME">
            <label class="mc-label" for="mce-LNAME"><span class="mc-label-content"><?php echo l::get('lastname') ?> </label></span>
          </div>
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;"><input type="text" name="b_b2ec7f81b5575c608e25383a8_5fccc97032" tabindex="-1" value=""></div>
          <div class="clear"><input type="submit" value="<?php echo l::get('submit') ?>" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
        </div>
      </form>
    </div>

    <!--End mc_embed_signup-->
  </section>
</article>
