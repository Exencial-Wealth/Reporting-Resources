/*
  Asset Allocation Report JavaScript
*/


// Variables
const assetLocationReportPieChart = document.querySelector('#assetLocationReportPieChart');
const assetLocationChartDataField = document.querySelector(
  '#assetLocationChartDataField'
);
const assetLocationChartData = JSON.parse(
  assetLocationChartDataField.value
);

// Build slices for pie chart
assetLocationReportPieChartSlices = [];
// assetLocationChartData is rendered in the Django template
for (const assetClass in assetLocationChartData) {
  assetLocationReportPieChartSlices.push({
    name: assetClass,
    y: parseFloat(assetLocationChartData[assetClass])
  });
}

// Build the chart
Highcharts.chart(assetLocationReportPieChart.id, {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: ''
  },
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
      }
    }
  },
  series: [{
    name: 'Share',
    data: assetLocationReportPieChartSlices
  }],
  exporting: {
    enabled: false
  }
});