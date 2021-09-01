function menuMove(event) {
    console.log(event.target.id);
    if (event.target.id === "home") {
      document.getElementById("menu").setAttribute("src", "home.html");
      document.getElementById("home").style =
        "color: black; background-color:white";
      document.getElementById("game").style =
        "color: white; background-color: #298eb5";
      document.getElementById("jukebox").style =
        "color: white; background-color: #298eb5";
    } else if (event.target.id === "game") {
      document.getElementById("menu").setAttribute("src", "game.html");
      document.getElementById("game").style =
        "color: black; background-color:white";
      document.getElementById("home").style =
        "color: white; background-color: #298eb5";
      document.getElementById("jukebox").style =
        "color: white; background-color: #298eb5";
    } else if (event.target.id === "jukebox") {
      document.getElementById("menu").setAttribute("src", "music.html");
      document.getElementById("jukebox").style =
        "color: black; background-color:white";
      document.getElementById("home").style =
        "color: white; background-color: #298eb5";
      document.getElementById("game").style =
        "color: white; background-color: #298eb5";
    }