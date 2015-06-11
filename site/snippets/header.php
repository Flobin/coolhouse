<!DOCTYPE html>
<html lang="<?php echo $site->language()->code() ?>">
<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
  <meta name="description" content="<?php echo $site->description()->html() ?>">
  <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">

  <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">

  <meta property="og:title" content="CoolHouse Scheveningen" />
  <meta property="og:site_name" content="CoolHouse"/>
  <meta property="og:url" content="http://cool-house.nl/" />
  <meta property="og:description" content="" />
  <meta property="article:author" content="https://www.facebook.com/CoolHouseScheveningen" />
  <meta property="article:publisher" content="https://www.facebook.com/CoolHouseScheveningen" />
  <meta property="og:image" content="http://cool-house.nl/assets/build/img/balkon_wide_1200.jpg" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="CoolHouse Scheveningen" />
  <meta name="twitter:description" content="" />
  <meta name="twitter:image" content="http://cool-house.nl/assets/build/img/balkon_wide_1200.jpg" />

  
  <script>
    if((window.devicePixelRatio===undefined?1:window.devicePixelRatio)>1)document.cookie='HTTP_IS_RETINA=1;path=/';
    (function(d) {
      var tkTimeout=3000;
      if(window.sessionStorage){if(sessionStorage.getItem('useTypekit')==='false'){tkTimeout=0;}}
      var config = {
        kitId: 'buk4abp',
        scriptTimeout: tkTimeout
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";if(window.sessionStorage){sessionStorage.setItem("useTypekit","false")}},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);
    // Picture element HTML5 shiv
    document.createElement( "picture" );
</script>
<script src="//cdnjs.cloudflare.com/ajax/libs/picturefill/2.3.1/picturefill.min.js" async></script>

  <?php echo css('assets/build/style/global.css') ?>

</head>
<body class="<?php echo $page->template() ?>">

  <header class="header" role="banner" id="site-header">
    <a class="logo" href="<?php echo $site->language()->url() ?>">
      <img src="<?php echo url('assets/build/img/logo_c.svg') ?>" alt="<?php echo $site->title()->html() ?>" id="header-logo-img" />
    </a>
    <?php snippet('menu') ?>
  </header>