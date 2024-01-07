
        let progress = document.getElementById("progress");
        let song = document.getElementById("song");
        let ctrlicon = document.getElementById("ctrlicon");   // telling controls to button

        song.onloadedmetadata= function(){      //setting data to slider button
            progress.max = song.duration;
            progress.value= song.currentTime;
        }
        function playPause(){    //to play pause the song
           
            if(ctrlicon.classList.contains("fa-circle-pause")){
                song.pause();
                ctrlicon.classList.remove("fa-circle-pause");
                ctrlicon.classList.add("fa-circle-play");
            }
                
            else{
                song.play();
                ctrlicon.classList.add("fa-circle-pause");
                ctrlicon.classList.remove("fa-circle-play");
            }
        }

        
        // if(song.play()){
        //     setInterval(()=>{
        //         progress.value=song.currentTime;
        //     },500);  // sliding the slider while song plays
        // }
        song.onplay = function () {
            setInterval(() => {
                progress.value = song.currentTime;
            }, 500);
        };
        progress.onchange = function(){
            song.play();
            song.currentTime = progress.value;
            ctrlicon.classList.add("fa-circle-pause");
            ctrlicon.classList.remove("fa-circle-play");    //sliding the slider to a time or changing the song duration
        }
