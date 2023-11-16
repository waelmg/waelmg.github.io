const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

// toggle for hamburger menu
menuToggle.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    } else {
        navLinks.classList.add('active');
    }
});


// click event listener to close the menu when clicking anywhere else
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});


// Show colored alternating experinces
var missionPassion = document.getElementById('mission-passion');
const words = ["Software Development", "Web Design", "Systems Analysis"];
let index = 1;

function changeMissionPassion() {
    missionPassion.textContent = words[index];
    index = (index + 1) % words.length;
}

setInterval(changeMissionPassion, 1500);


// Show the "Back to Top" button when the user scrolls down
window.onscroll = function() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      document.getElementById("to-top").style.display = "block";
      document.getElementById("header-section").style.display = "block";
  } else {
      document.getElementById("to-top").style.display = "none";
      document.getElementById("header-section").style.display = "none";
  }
};


// Scroll to the top when the button is clicked
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For other browsers
}

//hide the loader when your website content has finished loading
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});
