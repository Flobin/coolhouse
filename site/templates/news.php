<?php snippet('header') ?>

  <main class="main" role="main" id="main">

      <nav class="breadcrumb" role="navigation">
        <?php echo l::get('here') ?>: <a href="/">home</a> > <?php echo l::get('news') ?>
      </nav>

    <h1><?php echo l::get('nieuws') ?></h1>

    <?php foreach($site->page('nieuws')->children()->visible()->flip() as $article): ?>
        <article class="single-post">
          <header>
              <h2><?php echo $article->title()->html() ?></h2>
              <p class="post-date">
                  <?php echo l::get('published') ?>: <time datetime="<?php echo $page->date('c') ?>" pubdate="pubdate"><?php echo relativeDate($article->date('j F Y')) ?></time>
              </p>
          </header>
          <section>
              <p><?php echo $article->text()->excerpt(300) ?></p>
          </section>
          <footer class="post-footer">
              <p><a href="<?php echo $article->url() ?>"><?php echo l::get('readmore') ?></a></p>
          </footer>
        </article>
    <?php endforeach ?>

  </main>

<?php snippet('footer') ?>
