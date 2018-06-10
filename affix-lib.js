$(document).ready(function() {
  $(".affix").css({
	  "position": "fixed",
	  "top": "0",
	  "right": "0",
	  "left": "0",
	  "z-index": "1030"
  });
  
  var toggleAffix = function(ele, scroll, wrapper) {
    var height = ele.outerHeight(),
        top = wrapper.offset().top;

    if (scroll.scrollTop() >= top){
        wrapper.height(height);
        ele.addClass("affix");
    }
    else {
        ele.removeClass("affix");
        wrapper.height('auto');
    }
  };

  $('[data-spy="affix"]').each(function() {
    var ele = $(this);
	var wrapper = $('<div></div>');

    ele.before(wrapper);
    $(window).on('scroll resize', function() {
        toggleAffix(ele, $(this), wrapper);
    });

    toggleAffix(ele, $(window), wrapper);
  });
});
