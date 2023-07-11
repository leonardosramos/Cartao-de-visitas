var toggle = document.getElementById("toggle");
toggle.addEventListener("change", function() {
    var logoImage = document.querySelector("header img");
    var leoImage = document.querySelector("main img");
    var siteLink = document.querySelector("main ul li:nth-child(1) a");
  
    if (this.checked) {
      
      logoImage.src = "Lsrx-logo-w.png";
      leoImage.src = "cyber-leo-black.png"
      siteLink.href = "site-black.html";
  
      
    } else {
      
      logoImage.src = "Lsrx-logo.png";
      leoImage.src = "cyber-leo.png"
      siteLink.href = "site.html";

    }

    if (this.checked) {
      
      document.body.classList.add("dark");
      
      var elementsToStyle = document.querySelectorAll("header h1");
      
      elementsToStyle.forEach(function(element) {
        element.classList.add("dark-el");
      });
    } else {
      
      document.body.classList.remove("dark");
      
      var elementsToStyle = document.querySelectorAll("header h1");
      
      elementsToStyle.forEach(function(element) {
        element.classList.remove("dark-el");
      });
    }

    if (this.checked) {
      
      var elementsToStyle = document.querySelectorAll("main h2");
      
      elementsToStyle.forEach(function(element) {
        element.classList.add("dark-el-2");
      });
    } else {
      
      var elementsToStyle = document.querySelectorAll("main h2");
      
      elementsToStyle.forEach(function(element) {
        element.classList.remove("dark-el-2");
      });
    }
    if (this.checked) {
      
      var elementsToStyle = document.querySelectorAll("footer h5");
      
      elementsToStyle.forEach(function(element) {
        element.classList.add("dark-el-3");
      });
    } else {
      
      var elementsToStyle = document.querySelectorAll("footer h5");
      
      elementsToStyle.forEach(function(element) {
        element.classList.remove("dark-el-3");
      });
    }
    if (this.checked) {
      
      var elementsToStyle = document.querySelectorAll("main ul li button");
      
      elementsToStyle.forEach(function(element) {
        element.classList.add("dark-el-4");
      });
    } else {
      
      var elementsToStyle = document.querySelectorAll("main ul li button");
      
      elementsToStyle.forEach(function(element) {
        element.classList.remove("dark-el-4");
      });
    }
});

