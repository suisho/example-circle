var circle = new ProgressBar.Circle('#example-percent-container', {
  color: '#FCB03C',
  strokeWidth: 3,
  trailWidth: 3,
  duration: 2000,
  /*text: {
    value: 'あと24時間00分00秒',
    autoStyle :false,
    className : "c-timer"
  },
  */
  step: function(state, bar) {
    //bar.setText(text)//.toFixed(0));
    var max = 24 * 60 * 60
    var time = Math.ceil(max - max * bar.value())
    setTimer(time)
  }
});
function setTimer(time){
  var h = time / 3600 | 0
  var m = time % 3600 / 60 | 0
  var s = time % 60
  function padZero(v){
    return (v < 10) ? "0" + v : v
  }
  var text = padZero(h) + "時間" + padZero(m) + "分" + padZero(s) + "秒"
  $(".timer").text(text)
  $(".timer").data("time", time)
}
function decrementTimer(){
  var t = $(".timer").data("time") - 1
  console.log(t)
  setTimer(t)
}

circle.animate(0.6, function() {
  setInterval(function(){
    decrementTimer()
  }, 1000)
})