<?php

return function($site, $pages, $page) {

   $form = uniform('contact-form', array(
         'required' => array('_from' => 'email'),
         'actions'  => array(
            array(
               '_action' => 'email',
               'to'      => 'info@davlstudio.com',
               'sender'  => 'info@cool-house.nl',
               'subject' => 'Reactie via cool-house.nl'
            )
         )
      )
   );

   return compact('form');
};