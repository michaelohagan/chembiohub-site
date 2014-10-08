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

$('#blog-widget').FeedEk({
    FeedUrl : '//chembiohub.ox.ac.uk/feed.xml',
  MaxCount : 3,
    ShowDesc : true,
    ShowPubDate:true,
    DescCharacterLimit:300,
    TitleLinkTarget:'_blank'
  });

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