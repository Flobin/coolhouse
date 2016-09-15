<nav role="navigation">

  <input type="checkbox" id="toggle" />
  <label for="toggle" class="toggle"></label>
      <ul class="menu">
          <?php if ($site->language() == 'nl') {
              // hard coding is fun
              echo '
              <li class="parent">
                <a class="menu-link" href="/#Coolhouse">Coolhouse</a>
              </li>
              <li class="parent">
                <a class="menu-link" href="/#Omgeving">Omgeving</a>
              </li>
              <li class="parent">
                <a class="menu-link" href="/#Locatie">Locatie</a>
              </li>
              <li class="parent">
                <a class="menu-link" href="/#Woningen">Woningen</a>
              </li>
              <li class="parent">
                <a class="menu-link" href="/#Inspiratie">Inspiratie</a>
              </li>
              <li class="parent">
                <a class="menu-link" href="/#Project">Project</a>
              </li>
              <li class="parent">
                <a class="menu-link" href="/#Inschrijven">Inschrijven</a>
              </li>
              ';
          } else {
              echo '
              <li class="parent">
                <a class="menu-link" href="/en/#Coolhouse">Coolhouse</a>
              </li>
              <li class="parent">
                <a class="menu-link" href="/en/#Area">Area</a>
              </li>
              <li class="parent">
                <a class="menu-link" href="/en/#Location">Location</a>
              </li>
              <li class="parent">
                <a class="menu-link" href="/en/#Homes">Homes</a>
              </li>
              <li class="parent">
                <a class="menu-link" href="/en/#Inspiration">Inspiration</a>
              </li>
              <li class="parent">
                <a class="menu-link" href="/en/#Project">Project</a>
              </li>
              <li class="parent">
                <a class="menu-link" href="/en/#Register">Register</a>
              </li>
              ';
          } ?>
          <?php foreach($site->languages() as $language): ?>
            <li <?php e($site->language() == $language, ' id="language-active"') ?> class="parent">
              <a href="<?php echo $page->url($language->code()) ?>" class="menu-link">
                <?php echo html($language->name()) ?>
              </a>
            </li>
          <?php endforeach ?>
      </ul>

</nav>
