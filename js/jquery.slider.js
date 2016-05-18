(function($) {

$.fn.slider = function(options) {

	var defaults = {
		pixelsImg: 155,
		delay: 500
	};

	var settings = $.extend(defaults, options);

	var leftUiel = $('.da-carousel__arrow--left');
	var rightUiel = $('.da-carousel__arrow--right');
	var elementsList = $('.da-carousel__list');

	var pixelsOffset = settings.pixelsImg;
	var currentLeftValue = 0;
	var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 4) * pixelsOffset);
    var maximumOffset = 0;
    var delay = settings.delay;

	leftUiel.click(function() {
		if (currentLeftValue != maximumOffset) {
            currentLeftValue += pixelsOffset;
            console.log(pixelsOffset);
            elementsList.animate({ left : currentLeftValue + "px"}, delay);
        }
	});

	rightUiel.click(function() {
		if (currentLeftValue != minimumOffset) {
            currentLeftValue -= pixelsOffset;
            console.log(pixelsOffset);
            elementsList.animate({ left : currentLeftValue + "px"}, delay);
        }
	});
return this;
}
})(jQuery);
