function setProgress($element, progress){
  var rotation = Math.floor(progress/100 * 180);
	var fillRotation = rotation;
	var fixRotation = rotation * 2;
	$element.find('.circle .fill, .circle .mask.full').css("transform", 'rotate(' + fillRotation + 'deg)');
	$element.find('.circle .fill.right').css("transform", 'rotate(' + fixRotation + 'deg)');
	$element.find('.timer').text(progress)
}

setTimeout(function(){
	setProgress($(".radial-progress"), 30)
}, 0)
