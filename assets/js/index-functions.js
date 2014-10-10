$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
$(document).ready(function() {
  /** Contact form submission */
  
  $('#contact-form').on('submit', function(e){
    //e.preventDefault();
    //client side email validation
    //$('#non-oxford-email').removeClass("hidden");
    //$('#email').closest('div.form-group').removeClass("has-error");
      /*$.post( "//chembiohub.ox.ac.uk/app/contacts/", $('#contact-form').serialize(), function(data) {
        alert(data);
      } );*/
  var valuesToSubmit = $(this).serialize();
    $.ajax({
      type: "POST",
      url: $(this).attr('action'),
      data: valuesToSubmit,
      dataType: "JSON"
    }).done(function() {
      $('#success-message').show();
    });
    return false;
  });

});

/*
$('#blog-widget').FeedEk({
    FeedUrl : '//chembiohub.ox.ac.uk/feed.xml',
  MaxCount : 3,
    ShowDesc : true,
    ShowPubDate:true,
    DescCharacterLimit:300,
    TitleLinkTarget:'_blank'
  });*/

$('#forum-widget').FeedEk({
    FeedUrl : '//chembiohub.ox.ac.uk/askbot/feeds/rss/',
  MaxCount : 5,
    ShowDesc : true,
    ShowPubDate:true,
    DescCharacterLimit:100,
    TitleLinkTarget:'_blank'
  });

$('.ppl-thumb').contenthover({
    overlay_background:'#000',
    overlay_opacity:0.8
});

vpw = $(window).width();
vph = $(window).height();
if($('.functional').height() < vph) {
  $('.functional').height(vph); 
}
$(window).keypress(function(e) {
    if (e.keyCode == 13) {
        redirect_search();
    }
});
$("#equip-search-btn").click(function(e){
  e.preventDefault();
  redirect_search();
});

function redirect_search(){
  var v = $("input#equip-search").val();
  if(v){
      window.location = "https://www.research-facilities.ox.ac.uk/account/webauth/?next=/search/?q=" + v + "&filter.basedNear.uri=&filter.formalOrganisation.uri=http%3A%2F%2Foxpoints.oucs.ox.ac.uk%2Fid%2F00000000";
  }
}

//endswith polyfill - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
if (!String.prototype.endsWith) {
  Object.defineProperty(String.prototype, 'endsWith', {
    value: function (searchString, position) {
      var subjectString = this.toString();
      if (position === undefined || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    }
  });
}


//we are only accepting direct submissions from Oxford emails at the moment - 
function isEmailOx() {
  if ($('#email').val().endsWith('ox.ac.uk')) {
    return true;
  }
  return false;
}