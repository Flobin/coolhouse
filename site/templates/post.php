<?php snippet('header') ?>

  <main class="main" role="main" id="main">

      <nav class="breadcrumb" role="navigation">
        U bent hier: <a href="/">Home</a> > <a href="/<?php echo l::get('news') ?>"><?php echo l::get('news') ?></a> > <?php echo $page->title()->html() ?>
      </nav>

    <article class="single-post">
        <header>
            <h1><?php echo $page->title()->html() ?></h1>
        </header>
        <section>
            <?php echo $page->text()->kirbytext() ?>
        </section>
        <footer class="post-footer">
            <p class="post-date">
                Gepubliceerd: <time datetime="<?php echo $page->date('c') ?>" pubdate="pubdate"><?php echo relativeDate($page->date('j F Y')) ?></time>
            </p>
        </footer>
    </article>

  </main>

<?php snippet('footer') ?>
