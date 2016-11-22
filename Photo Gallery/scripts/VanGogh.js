        $(document).ready(function() {
            var x = 0;
            var y = 0;
            var banner = $('#banner');
            
            banner.css('backgroundPosition', x + "px" + ' ' + y + "px");
            window.setInterval(function() {
                banner.css('backgroundPosition', x + "px" + ' ' + y + "px");
                y--;
            }, 90);
            
            var $track = $('audio')[0];
            var $play = $('#playButton');
            var $pause = $('#pauseButton');
            var $sound = $('#soundButton');
            var $mute = $('#muteButton');
            $pause.hide();
            $mute.hide();
            
            $play.click(function(evt) {
                evt.preventDefault();
                $track.play();
                $play.hide();
                $pause.show();
                var updateTime = setInterval(timeUpdate, 500);
                if (autoplay === true) {
                    $play.hide();
                    $pause.show();
                }
            });
            
            
            
            $pause.click(function(evt) {
                evt.preventDefault();
                $track.pause();
                $pause.hide();
                $play.show();
                window.clearInterval(updateTime);
            });
            
            $sound.click(function(evt) {
                if ($track.muted === false) {
                    evt.preventDefault();
                    $track.muted = true;
                    evt.preventDefault();
                    $sound.hide();
                    $mute.show();
                }
            });
            
            $mute.click(function(evt) {
                if ($track.muted === true) {
                    evt.preventDefault();
                    $track.muted = false;
                    $mute.hide();
                    $sound.show();
                }
            });
        });
        
        function timeUpdate() {
            var track = document.getElementById('musicTrack');
            var time = document.getElementById('currentTime');
            var play = document.getElementById('playButton');
            var barSize = 600;
            var defaultBar = document.getElementById('defaultBar');
            var progressBar = document.getElementById('progressBar');
            var duration = document.getElementById('duration');
            var minutes = parseInt(track.duration / 60);
            var seconds = parseInt(track.duration % 60);
            
            duration.innerHTML = minutes + ":" + seconds + " ";
            if (!track.ended) {
                var minutesPlayed = parseInt(track.currentTime / 60);
                var secondsPlayed = parseInt(track.currentTime % 60);
                time.innerHTML = minutesPlayed + ":" + secondsPlayed;
                var size = parseInt(track.currentTime * barSize / track.duration);
                progressBar.style.width = size + "px";
            } else {
                time.innerHTML = "0.00";
                play.style.backgroundImage = 'url(./Photo%20Gallery/images/play.png)';
            }
            if (secondsPlayed < 10) {
                time.innerHTML = minutesPlayed + ":" + "0" + secondsPlayed;
                progressBar.style.width = size + "0px";
                widnow.clearInterval(updateTime);
            }
        }