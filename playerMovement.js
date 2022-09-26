AFRAME.registerComponent("player-movement", {
    init: function () {
      this.walk();
    },
    walk: function () {
      window.addEventListener("keydown", (e) => {
        // Add the condition to play sound
        if(e.key==="ARROWUP"||e.key==="ARROWDOWN"||e.key==="ARROWLEFT"||e.key==="ARROWRIGHT"){
          var entity = document.querySelector("#sound2");
          entity.components.sound.playSound()
        }
      });
    },
  });


  