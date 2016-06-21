<?php

/*

---------------------------------------
License Setup
---------------------------------------

Please add your license key, which you've received
via email after purchasing Kirby on http://getkirby.com/buy

It is not permitted to run a public website without a
valid license key. Please read the End User License Agreement
for more information: http://getkirby.com/license

*/

c::set('license', '0b9aad647e18641f1d28d36a6e99e72e');

/*

---------------------------------------
Kirby Configuration
---------------------------------------

By default you don't have to configure anything to
make Kirby work. For more fine-grained configuration
of the system, please check out http://getkirby.com/docs/advanced/options

*/

c::set('languages', array(
  array(
    'name'    => 'Nederlands',
    'code'    => 'nl',
    'locale'  => 'nl_NL.utf-8',
    'url'     => '/',
    'default' => 'true'
  ),
  array(
    'name'    => 'English',
    'code'    => 'en',
    'locale'  => 'en_US.utf-8',
    'url'     => '/en'
  )
));

c::set('markdown.extra', true);

c::set('MinifyHTML', TRUE);

c::set('cache.driver', 'memcached');
