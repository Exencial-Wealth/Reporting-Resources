/*
  Print Settings for Reports
*/

window.addEventListener('beforeprint', function(){
  let reportTableBodies = document.querySelectorAll(
    'tbody.collapse'
  );

  // loop through report table with a class of "collapse"
  for (let body of reportTableBodies) {
    //
    body.classList.remove('collapse');
    //
    body.classList.add('show');
  }
});


window.addEventListener('afterprint', function(){
  let reportTableBodies = document.querySelectorAll(
    'tbody.show'
  );

  let tableRowExpandButtons = document.querySelectorAll(
    '.table-row-expand-button'
  );

  let tableRowCollapseButtons = document.querySelectorAll(
    '.table-row-collapse-button'
  );

  // loop through report tables with a class of "show"
  for (let body of reportTableBodies) {
    //
    body.classList.remove('show');
    //
    body.classList.add('collapse');
  }

  // loop over each collapse button and hide the button
  for (let button of tableRowCollapseButtons) {
    //
    button.classList.add('d-none');
  }

  // loop over each expand button and show the button
  for (let button of tableRowExpandButtons) {
    //
    button.classList.remove('d-none');
  }
});
