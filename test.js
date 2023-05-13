




function uploadImage() {
    document.getElementById('upload').click();
  }

  function displayImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      const imgData = e.target.result;
      const circle = document.querySelector('.circle');
      const img = new Image();
      img.src = imgData;
      img.onload = function() {
        const width = this.width;
        const height = this.height;

        if (width > height) {
          img.style.height = '100%';
          img.style.width = 'auto';
        } else {
          img.style.width = '100%';
          img.style.height = 'auto';
        }

        circle.innerHTML = '';
        circle.appendChild(img);
      }
    }

    reader.readAsDataURL(file);
  }


const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const welcomeMsg = document.querySelector('.welcome-msg');
welcomeMsg.textContent = `Welcome ${params.username}!`;


const username = document.querySelector('.username');
username.textContent = params.username;




// Get the button element
const btn = document.querySelector('.btn');

// Get the hero element
const hero = document.querySelector('.hero');

// Add a click event listener to the button
btn.addEventListener('click', function() {
  // Toggle a CSS class to change the background color
  hero.classList.toggle('hero-dark');
});




document.addEventListener("DOMContentLoaded", function() {
    var monkeyImages = document.querySelectorAll(".monkey");
    var popup = document.getElementById("popup");
    var closeButton = document.getElementById("close-btn");
    var popupImage = document.getElementById("popup-img");

    monkeyImages.forEach(function(image) {
      image.addEventListener("click", function() {
        var src = this.getAttribute("src");
        popupImage.setAttribute("src", src);
        popup.style.display = "block";
      });
    });

    closeButton.addEventListener("click", function() {
      popup.style.display = "none";
    });
  });

