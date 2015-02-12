var circleProgress = new ProgressBar.Circle('#example-percent-container', {
  color: '#FCB03C',
  strokeWidth: 5,
  trailWidth: 3,
  duration: 1000,
  step: function(state, bar) {
    setTimer(restMicrosecound()/1000)
  }
});
function setTimer(time){
  var h = time / 3600 | 0
  var m = time % 3600 / 60 | 0
  var s = time % 60
  function padZero(v){
    v = Math.ceil(v)
    return (v < 10) ? "0" + v : v
  }
  var text = padZero(h) + "時間" + padZero(m) + "分" + padZero(s) + "秒"
  $(".timer").text(text)
  $(".timer").data("time", time)
}
function decrementTimer(){
  var t = restMicrosecound()
  setTimer(t/1000)
}
function restMicrosecound(){
  var date = new Date($(".prog-container").data("timeout"))
  var now = new Date()
  circleProgress.value(0.9)
  return date.getTime() - now.getTime()
}
function restValue(){
  var max = 24 * 60 * 60 * 1000
  var rest = restMicrosecound()
  return rest/max
}
setTimeout(function(){
  var rest = restValue()
  circleProgress.animate(rest, function() {
    setInterval(function(){
      decrementTimer()
    }, 1000)
  })
}, 500)
