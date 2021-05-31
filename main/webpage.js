function hamburgerHTML() {
    var x = document.getElementById("navbar");
    if (x.className.indexOf("display-burger") == -1) {
      x.className += " display-burger";
    } else { 
      x.className = x.className.replace(" display-burger", "");
    }
  }
