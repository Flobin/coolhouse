<?php snippet('header') ?>

  <main class="main" role="main">

    <article>
      <?php echo $page->text()->kirbytext() ?>
    </article>

    <article id="<?php echo l::get('contact') ?>" class="homepage-article">
  <section>
    <?php echo $data->text()->kirbytext() ?>
  </section>
  <section>

<script src="https://secure.jotformeu.com/static/prototype.forms.js" type="text/javascript"></script>
<script src="https://secure.jotformeu.com/static/jotform.forms.js?3.3.7431" type="text/javascript"></script>
<script type="text/javascript">
   JotForm.init(function(){
      JotForm.onSubmissionError="jumpToSubmit";
   });
</script>
<link href="https://secure.jotformeu.com/static/formCss.css?3.3.7431" rel="stylesheet" type="text/css" />
<link type="text/css" rel="stylesheet" href="https://secure.jotformeu.com/css/styles/nova.css?3.3.7431" />
<link type="text/css" media="print" rel="stylesheet" href="https://secure.jotformeu.com/css/printForm.css?3.3.7431" />
<style type="text/css">
    .form-label-left{
        width:150px !important;
    }
    .form-line{
        padding-top:12px;
        padding-bottom:12px;
    }
    .form-label-right{
        width:150px !important;
    }
    .form-all{
        width:650px;
        color:#555 !important;
        font-family:"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif;
        font-size:14px;
    }
    .form-radio-item label, .form-checkbox-item label, .form-grading-label, .form-header{
        color: #555;
    }

</style>

<link type="text/css" rel="stylesheet" href="https://secure.jotformeu.com/css/responsive.css?3.3.7431" />
<form class="jotform-form" action="https://submit.jotformeu.com/submit/51602439830351/" method="post" name="form_51602439830351" id="51602439830351" accept-charset="utf-8">
  <input type="hidden" name="formID" value="51602439830351" />
  <div class="form-all">
    <ul class="form-section page-section">
      <li class="form-line" data-type="control_fullname" id="id_5">
        <label class="form-label form-label-left form-label-auto" id="label_5" for="input_5"> Naam </label>
        <div id="cid_5" class="form-input jf-required">
          <span class="form-sub-label-container" style="vertical-align: top">
            <input class="form-textbox" type="text" size="10" name="q5_naam[first]" id="first_5" />
            <label class="form-sub-label" for="first_5" id="sublabel_first" style="min-height: 13px;"> Voornaam </label>
          </span>
          <span class="form-sub-label-container" style="vertical-align: top">
            <input class="form-textbox" type="text" size="15" name="q5_naam[last]" id="last_5" />
            <label class="form-sub-label" for="last_5" id="sublabel_last" style="min-height: 13px;"> Achternaam </label>
          </span>
        </div>
      </li>
      <li class="form-line jf-required" data-type="control_email" id="id_6">
        <label class="form-label form-label-left form-label-auto" id="label_6" for="input_6">
          Email
          <span class="form-required">
            *
          </span>
        </label>
        <div id="cid_6" class="form-input jf-required">
          <input type="email" class=" form-textbox validate[required, Email]" id="input_6" name="q6_email6" size="30" value="" />
        </div>
      </li>
      <li class="form-line" data-type="control_textarea" id="id_4">
        <label class="form-label form-label-left form-label-auto" id="label_4" for="input_4"> Vraag </label>
        <div id="cid_4" class="form-input jf-required">
          <textarea id="input_4" class="form-textarea" name="q4_vraag" cols="40" rows="6"></textarea>
        </div>
      </li>
      <li class="form-line" data-type="control_button" id="id_2">
        <div id="cid_2" class="form-input-wide">
          <div style="margin-left:156px" class="form-buttons-wrapper">
            <button id="input_2" type="submit" class="form-submit-button">
              Submit
            </button>
          </div>
        </div>
      </li>
      <li style="display:none">
        Should be Empty:
        <input type="text" name="website" value="" />
      </li>
    </ul>
  </div>
  <input type="hidden" id="simple_spc" name="simple_spc" value="51602439830351" />
  <script type="text/javascript">
  document.getElementById("si" + "mple" + "_spc").value = "51602439830351-51602439830351";
  </script>
</form>

  </section>
</article>

  </main>

<?php snippet('footer') ?>