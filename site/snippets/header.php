<!DOCTYPE html>
<html lang="<?php echo $site->language()->code() ?>">
<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
  <meta name="description" content="<?php echo $site->description()->html() ?>">
  <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">

  <script>
    (function(d) {
      var config = {
        kitId: 'buk4abp',
        scriptTimeout: 3000
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);
  </script>

  <?php echo css('assets/build/style/global.css') ?>

</head>
<body class="<?php echo $page->template() ?>">

  <header class="header" role="banner" id="site-header">
    <a class="logo" href="<?php echo $site->language()->url() ?>">
      <img src="<?php echo url('assets/build/img/logo_c.svg') ?>" alt="<?php echo $site->title()->html() ?>" id="header-logo-img" />
    </a>
    <?php snippet('menu') ?>
  </header>