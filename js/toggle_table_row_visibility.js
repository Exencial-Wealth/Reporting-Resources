/*
  Function to toggle visibility of collapsed table rows.
*/


function toggleTableRowVisibility(){

  const tableRowToggleButtons = document.querySelectorAll('td[data-toggle="collapse"]');

  for (let i=0;i<tableRowToggleButtons.length;i++){

    svgIcons = tableRowToggleButtons[i].querySelectorAll('svg');

    for (let x=0;x<svgIcons.length;x++) {
      svgIcons[x].addEventListener('click', function(){

        if (!this.classList.contains('d-none')) {
          this.classList.add('d-none');
        }

        try{
          this.nextElementSibling.classList.remove('d-none');
        }
        catch(error) {
          // console.error(error);
          this.previousElementSibling.classList.remove('d-none');
        }
        
      });
    }
  }
}


// Enable toggle visibility of collapsed table rows
toggleTableRowVisibility();