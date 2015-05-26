<nav role="navigation">

  <ul class="menu">
    <li>
      <a href="/">home</a>
    </li>
    <?php foreach($pages->visible() as $p): ?>
    <li>
      <a class="menu-link" href="#<?php echo $p->title() ?>"><?php echo $p->title()->html() ?></a>

    </li>
    <?php endforeach ?>
    <?php foreach($site->languages() as $language): ?>
    <li <?php e($site->language() == $language, ' id="language-active"') ?> class="">
      <a href="<?php echo $page->url($language->code()) ?>" class="menuitem">
        <?php echo html($language->name()) ?>
      </a>
    </li>
    <?php endforeach ?>
  </ul>

</nav>
