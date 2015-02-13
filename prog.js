var circleProgress = new ProgressBar.Circle('#example-percent-container', {
  //color: '#FCB03C',
  color: '#ccc',
  trailColor: '#FCB03C',
  strokeWidth: 5,
  trailWidth: 5,
  duration: 1000,
  value : 1,
  step: function(state, bar) {
    var time = valToTime(bar.value())
    setTimer(time)
  }
});

function computeDuration(ms){
  var h = String(Math.floor(ms / 3600000) + 100).substring(1);
  var m = String(Math.floor((ms - h * 3600000)/60000)+ 100).substring(1);
  var s = String(Math.round((ms - h * 3600000 - m * 60000)/1000)+ 100).substring(1);
  return h+'時間'+m+'分'+s + '秒';
}
function setTimer(time){
  $(".timer").text(computeDuration(time))
}
function decrementTimer(){
  var t = restMicrosecound()
  setTimer(t)
}
function restMicrosecound(){
  var date = new Date($(".prog-container").data("timeout"))
  var now = new Date()
  return date.getTime() - now.getTime()
}
function valToTime(val){
  var max =  24 * 60 * 60 * 1000
  return max - val * max
}
function restValue(){
  var max = 24 * 60 * 60 * 1000
  var rest = restMicrosecound()
  return rest/max
}
setTimeout(function(){
  var rest = 1 - restValue()
  circleProgress.animate(rest, function() {
    setInterval(function(){
      decrementTimer()
    }, 500)
  })
}, 500)
