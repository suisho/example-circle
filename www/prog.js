(function($, ProgressBar){
  // global config
  var max = 24 * 60 * 60 * 1000
  var startWait = 500

  var startProgress = function($element){
    var $timer = $element.find(".timer")
    var circleProgress = new ProgressBar.Circle($element.find(".percent-container").get(0), {
      color: '#ccc',
      trailColor: '#FCB03C',
      strokeWidth: 5,
      trailWidth: 5,
      duration: 800,
      value : 1,
      step: function(state, bar) {
        var time = progressToTime(bar.value())
        setTimer(time)
      }
    });

    function computeDuration(ms){
      if(isNaN(ms)) ms = max

      var h = String(Math.floor(ms / 3600000) + 100).substring(1);
      var m = String(Math.floor((ms - h * 3600000)/60000)+ 100).substring(1);
      var s = String(Math.round((ms - h * 3600000 - m * 60000)/1000)+ 100).substring(1);
      return h+'時間'+m+'分'+s + '秒';
    }

    function setTimer(time){
      $timer.text(computeDuration(time))
    }
    function finished(){
      $timer.text("終了")
    }
    function syncTimer(){
      var val = invertRestValue()
      if(0 <= val && val <= 1){
        circleProgress.set(invertRestValue())
      }
      setTimer(restMicrosecound())
    }

    function restMicrosecound(){
      var date = new Date($element.data("timeout"))
      var now = new Date()
      return date.getTime() - now.getTime()
    }

    function progressToTime(val){
      return max - val * max
    }

    function restProgress(){
      var rest = restMicrosecound()
      return rest/max
    }
    function invertRestValue(){
      return 1 - restProgress()
    }
    function tick(){
      setInterval(function(){
        syncTimer()
      }, 500)
    }
    function start(){
      var value = invertRestValue()
      if(value < 0){
        syncTimer()
        tick()
        return
      }
      if(1 < value){
        finished()
        return
      }
      console.log(value)
      setTimeout(function(){
        circleProgress.animate(value, tick)
      }, startWait)
    }
    start()
  }
  var $container = $(".prog-container").each(function(elm){
    startProgress($(this))
  })
})(jQuery, ProgressBar)
