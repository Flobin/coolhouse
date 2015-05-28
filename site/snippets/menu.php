<nav role="navigation">

  <input type="checkbox" id="toggle" />
  <label for="toggle" class="toggle"></label>
  <ul class="menu">
    <?php foreach($pages->visible() as $p): ?>
    <li class="parent">
      <a class="menu-link" href="#<?php echo $p->title() ?>"><?php echo $p->title()->html() ?></a>

    </li>
    <?php endforeach ?>
    <?php foreach($site->languages() as $language): ?>
    <li <?php e($site->language() == $language, ' id="language-active"') ?> class="parent">
      <a href="<?php echo $page->url($language->code()) ?>" class="menu-link">
        <?php echo html($language->name()) ?>
      </a>
    </li>
    <?php endforeach ?>
  </ul>

</nav>
