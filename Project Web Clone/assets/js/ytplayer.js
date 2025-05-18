// โหลด YouTube API
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: 'DknvOzqQCTo', // เปลี่ยนเป็นวิดีโอที่ต้องการ
      playerVars: {
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        loop: 1,
        playlist: 'DknvOzqQCTo',
        mute: 1,
        rel: 0,
      },
      events: {
        onReady: function (event) {
          event.target.mute();
          event.target.playVideo();
        }
      }
    });
  }
