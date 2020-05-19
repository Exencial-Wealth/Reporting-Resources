/*
  Remove Report Button Functionality
*/


// Define variables

let reportRemovalButtons = document.querySelectorAll('.report-removal-button');


// Define event listeners

for (let button of reportRemovalButtons) {
  button.addEventListener('click', function(){
    button.closest('.report').classList.add('d-none');
  });
}