/*
  Asset Allocation Report JavaScript
*/


// Variables
const assetAllocationReportPieChart = document.querySelector(
  '#assetAllocationReportPieChart'
);
const assetAllocationChartDataField = document.querySelector(
  '#assetAllocationChartDataField'
);
const assetAllocationChartData = JSON.parse(
  assetAllocationChartDataField.value
);


// Build slices for pie chart
assetAllocationReportPieChartSlices = [];
// chartData is rendered in the Django template
for (const assetClass in assetAllocationChartData) {
  assetAllocationReportPieChartSlices.push({
    name: assetClass,
    y: parseFloat(assetAllocationChartData[assetClass])
  });
}


// Funcs

// Build the chart
Highcharts.chart(assetAllocationReportPieChart.id, {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
    height: '280'
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
    data: assetAllocationReportPieChartSlices
  }],
  exporting: {
    enabled: false
  }
});
