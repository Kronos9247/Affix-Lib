/*
    A reimplementation of affix from bootstrap3 created for bootstrap4
    Copyright (C) 2018  Rafael Orman

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

$(document).ready(function() {
  /*$(".affix").css({ //idk this isn't really working! So i decided to add the css file 
	  "position": "fixed",
	  "top": "0",
	  "right": "0",
	  "left": "0",
	  "z-index": "1030"
  });*/
  
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
