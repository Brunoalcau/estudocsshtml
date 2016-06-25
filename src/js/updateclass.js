$('.nav-bar a').click(function(e){
  $('li a').removeClass('ative');
  $(e.target).addClass('ative');
});
