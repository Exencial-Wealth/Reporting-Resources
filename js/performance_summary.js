/*
  Performance Summary Report JavaScript
*/


// Variables
const accountPerformanceSummaryPieCharts = document.querySelectorAll('[id^="accountPerformanceSummaryPieChart-"]');
const accountPerformanceSummaryTables = document.querySelectorAll('[id^="accountPerformanceSummaryTable-"]');

let performanceSummaryChartData = [];

for (var i=0;i<accountPerformanceSummaryTables.length;i++) {

  accountChartData = []

  assetClasses = accountPerformanceSummaryTables[i].querySelectorAll('tr.asset-class-row');

  for (var x=0;x<assetClasses.length;x++) {
    assetClass = assetClasses[x].getAttribute('data-asset-class');
    assetClassWeight = assetClasses[x].getAttribute('data-asset-class-weight');

    // Check that the asset class weight is greater than zero
    if (assetClassWeight > 0) {
      accountChartData.push({ name: assetClass, y: parseFloat(assetClassWeight) });
    }
  }

  performanceSummaryChartData.push(accountChartData);
}

//
for (var i=0; i<accountPerformanceSummaryPieCharts.length; i++) {
  //
  thisChart = accountPerformanceSummaryPieCharts[i];

  // Build the chart
  Highcharts.chart(thisChart.id, {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: ''
    },
    // subtitle: {
    //   text: 'Asset class by weight.'
    // },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b><br>{point.percentage:.1f} %'
          // distance: -50,
          // filter: {
          //   property: 'percentage',
          //   operator: '>',
          //   value: 4
          // }
        }
      }
    },
    series: [{
      name: 'Share',
      data: performanceSummaryChartData[i]
      // data: [
      //   { name: 'Chrome', y: 61.41 },
      //   { name: 'Internet Explorer', y: 11.84 },
      //   { name: 'Firefox', y: 10.85 },
      //   { name: 'Edge', y: 4.67 },
      //   { name: 'Safari', y: 4.18 },
      //   { name: 'Other', y: 7.05 }
      // ]
    }],
    exporting: {
      enabled: false
    }
  });
}