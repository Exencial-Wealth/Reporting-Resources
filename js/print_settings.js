/*
  Print Settings for Reports
*/

window.addEventListener('beforeprint', function(){
  let reportTableBodies = document.querySelectorAll('tbody.collapse');

  // loop through report table with a class of "collapse"
  for (let body of reportTableBodies) {
    //
    body.classList.remove('collapse');
    //
    body.classList.add('show');
  }
});


window.addEventListener('afterprint', function(){
  let reportTableBodies = document.querySelectorAll('tbody.show');

  // loop through report tables with a class of "show"
  for (let body of reportTableBodies) {
    //
    body.classList.remove('show');
    //
    body.classList.add('collapse');
  }
});