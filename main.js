// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

// Get the modal
var modal = document.getElementById("myModal");
var pharModal = document.getElementById("pharModal");
var agriModal = document.getElementById("agriModal");
var bkModal = document.getElementById("bkModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var pharBtn = document.getElementById("pharBtn");
var agriBtn = document.getElementById("agriBtn");
var bkBtn = document.getElementById("bkBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var pharSpan = document.getElementsByClassName("close")[1];
var agriSpan = document.getElementsByClassName("close")[2];
var bkSpan = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

pharBtn.onclick = function() {
  pharModal.style.display = "block";
}

agriBtn.onclick = function() {
  agriModal.style.display = "block";
}

bkBtn.onclick = function() {
  bkModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
pharSpan.onclick = function() {
  pharModal.style.display = "none";
}
agriSpan.onclick = function() {
  agriModal.style.display = "none";
}
bkSpan.onclick = function() {
  bkModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == pharModal) {
    pharModal.style.display = "none";
  }
  if (event.target == agriModal) {
    agriModal.style.display = "none";
  }
  if (event.target == bkModal) {
    bkModal.style.display = "none";
  }
}

