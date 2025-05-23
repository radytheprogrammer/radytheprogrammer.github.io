// Back to top button functionality

// Get the button reference
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


  const input = document.querySelector('.input');
  const label = document.querySelector('label');

  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      label.style.display = 'none'; // or visibility: hidden;
    } else {
      label.style.display = ''; // revert to default
    }
  });
