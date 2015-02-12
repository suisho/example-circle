function setProgress($element, progress){
  // 右回転
  var lPie = $element.find(".pie.left")
  var rPie = $element.find(".pie.right")
  var rPieMax = 180
  var rDeg = 0
  if(progress < 50){
    rDeg = rPieMax * progress/50
  }
  rPie.css("transform", "rotate("+rDeg+"deg)")
}
setProgress($(".circle-container"), 33)
