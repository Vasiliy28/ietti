//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp", "zoomOutDown");
//Author URL: http://webdesign-master.ru
(function($) {
	'use strict'
		$.fn.animated = function(inEffect, outEffect,offsetBottom,offsetTop) {
			var bottomDef = "85%";
			var topDef = "15%";

			var bottom;
			var top;

			if (typeof offsetBottom == "undefined") {
				bottom = bottomDef;

			} else {
				if (typeof(offsetBottom) == "string") {
					if (offsetBottom.match(/%/i) == null) {
						bottom = bottomDef;

					} else {
						bottom = offsetBottom;
					}
				}
				else {
					bottom = $(window).height() - offsetBottom;
				}
			}
			if (typeof offsetTop == "undefined") {
				top = topDef;

			} else {
				if (typeof(offsetTop) == "string") {
					if (offsetTop.match(/%/i) == null) {
						top = topDef;

					} else {
						top = offsetTop;
					}
				}
				else {
					top = offsetTop;
				}
			}


			$(this).css("opacity", "0").addClass("animated ").waypoint(function (dir) {
				if (dir === "down") {
					$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
				} else {
					$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
				}
				;
			}, {
				offset: bottom
			}).waypoint(function (dir) {
				if (dir === "down") {
					$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
				} else {
					$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
				}
				;
			}, {
				offset: top
			});
		};
})(jQuery);