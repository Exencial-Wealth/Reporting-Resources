/*
  JavaScript to generate Agenda Report in separate tab
*/


// Define funcs

function generateAgendaReport(){
  // define variables
  let currentURL = window.location.href;
  let reportURL = currentURL.split('?')[0];
  let clientTitle = agendaReportParameters['title'];

  // update the reporting URL with the portfolio group ID and specify
  // the Agenda report as the report to generate
  reportURL += '?id=' + agendaReportParameters['id'] + '&group=' + agendaReportParameters['group'] + '&report=agenda'

  // check if the user has specified a custom cover page title
  if (!clientTitle.includes('Household')) {
    // replace spaces with plus signs, which is standard formatting
    // for URL parameters with spaces
    clientTitle = clientTitle.replace(' ', '+');

    // add the title URL parameter to the report URL
    reportURL += '&title=' + clientTitle
  }

  // open a new tab to generate the Agenda report
  window.open(reportURL);
}

generateAgendaReport();