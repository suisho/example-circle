function setProgress($element, progress){
  var rotation = Math.floor(progress/100 * 180);
	var fillRotation = rotation;
	var fixRotation = rotation * 2;
	var length = 10 // secound
	// css animation
	$element.find('.fill, .mask').css("transition", 'transform '+length + "s");
	$element.find('.fill, .mask.full').css("transform", 'rotate(' + fillRotation + 'deg)');
	$element.find('.fill.fix').css("transform", 'rotate(' + fixRotation + 'deg)');

	// text animation
	var current = progress
	$({count: 0}).animate({count : progress}, {
		duration : length * 1000,
		progress : function(){
			$element.find('.timer').text(Math.ceil(this.count))
		}
	})
}

setTimeout(function(){
	setProgress($(".radial-progress"), 100)
}, 0)
