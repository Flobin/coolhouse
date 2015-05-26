<?php snippet('header') ?>

  <main class="main" role="main">

    <article>
      <?php echo $page->text()->kirbytext() ?>
    </article>

    <article>
      <form action="<?php echo $page->url()?>" method="post">

        <label<?php e($form->hasError('_from'), ' class="erroneous"')?> for="email">E-Mail</label>
        <input type="email" name="_from" id="email" value="<?php $form->echoValue('_from') ?>" required/>

        <label for="message">Message</label>
        <textarea name="message" id="message"><?php $form->echoValue('message') ?></textarea>

        <label class="uniform__potty" for="website">Please leave this field blank</label>
        <input type="text" name="website" id="website" class="uniform__potty" />

        <?php if ($form->hasMessage()): ?>
        <div class="message <?php e($form->successful(), 'success' , 'error')?>">
          <?php $form->echoMessage() ?>
        </div>
        <?php endif; ?>

        <button type="submit" name="_submit" value="<?php echo $form->token() ?>"<?php e($form->successful(), ' disabled')?>>Submit</button>

      </form>
    </article>
    <article>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque risus lacus, scelerisque sit amet libero quis, mattis laoreet dolor. Vestibulum finibus a orci in pulvinar. Pellentesque iaculis efficitur suscipit. Duis faucibus ut sem eleifend congue. Pellentesque ipsum dui, vestibulum vel neque dictum, lobortis suscipit massa. Fusce pellentesque ante urna, vitae luctus justo porttitor eget. Phasellus sit amet odio odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac leo et nisi congue auctor.

      <p>Vestibulum purus risus, elementum in tincidunt et, convallis a lectus. Suspendisse in venenatis mi. Cras ac felis blandit, varius augue vitae, sagittis purus. Nam nec risus dapibus arcu condimentum imperdiet at eget odio. Suspendisse scelerisque tempus nisl nec luctus. Praesent at nisi in diam viverra molestie. Nunc non sapien a magna venenatis gravida. Suspendisse ut dignissim arcu, quis aliquam ex. Aenean at orci vel lorem maximus euismod gravida vel nulla. Aliquam a libero turpis. Aenean arcu nisi, blandit vitae malesuada sed, ullamcorper eget diam. Etiam sollicitudin blandit ultricies. Donec varius ipsum sed vulputate laoreet. Aenean pretium et erat quis congue. Nunc ac lacus magna.</p>

      <p>Nam venenatis euismod lectus id pulvinar. Aenean nisl eros, rutrum sed urna at, sollicitudin dignissim nisi. Quisque id mattis leo. Integer commodo id metus eget iaculis. Aliquam bibendum, massa pulvinar egestas rutrum, tellus nisl tempus augue, in molestie enim metus quis lorem. Suspendisse nunc diam, accumsan eu eros non, fringilla ornare libero. Aliquam pharetra eros purus, ut eleifend est ultrices sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas nulla justo, aliquet in congue ut, gravida non quam. Vestibulum volutpat in turpis sed pretium. In hac habitasse platea dictumst. Duis consectetur, arcu consectetur venenatis porta, nunc pulvinaus vehicula lectus, non suscipit metus felis sed augue. Curabitur hendrerit quam eget dolor pulvinar finibus. Vivamus finibus leo velit, at volutpat massa viverra a.</p>

      <p>Cras sed feugiat mauris, sit amet gravida nisl. Aliquam gravida posuere leo eu semper. Etiam vel urna non elit pharetra laoreet ut nec libero. Curabitur ipsum lacus, pulvinar sit amet consequat eu, aliquet id nulla. Etiam tincidunt nunc in massa bibendum dictum. Donec condimentum vitae neque eget sollicitudin. In maximus arcu sed placerat tincidunt. Fusce aliquet, arcu ac volutpat varius, libero orci mollis ex, ornare pretium ante tortor sed urna. Nulla aliquet mi vitae odio pretium, commodo aliquet metus placerat. Sed feugiat nunc dui, in luctus justo sollicitudin facilisis. Sed sed orci ut risus eleifend bibendum. In imperdiet libero gravida iaculis finibus.</p>

      <p>Ut mollis est eu feugiat condimentum. Curabitur et fringilla neque. Etiam lacus tellus, consectetur consectetur nunc vel, congue lacinia odio. Nulla efficitur placerat lacus, eget sodales nunc viverra eu. Cras porttitor sit amet sapien ac hendrerit. Fusce elit massa, tincidunt ut diam nec, commodo imperdiet ligula. Aliquam tincidunt commodo turpis, eu condimentum eros. Nam faucibus libero et consequat congue. Nulla egestas elit nec leo convallis blandit. Etiam a dapibus mauris. Etiam non nisi elementum, elementum turpis at, egestas arcu. Phasellus faucibus interdum commodo. Integer volutpat euismod finibus. Nullam sit amet nunc in leo vehicula iaculis. Cras luctus justo ac ultricies cursus.</p>
    </article>

  </main>

<?php snippet('footer') ?>