/*
  Investments Overview JavaScript
*/


// Variables
const cumulativeNetInvestmentChart = document.querySelector(
  '#cumulativeNetInvestmentChart'
);
const investmentsOverviewAllocationChart = document.querySelector(
  '#investmentsOverviewAllocationChart'
);
const investmentsOverviewCumulativeNetInvestmentChartDataField = document.querySelector(
  '#investmentsOverviewCumulativeNetInvestmentChartDataField'
);
const investmentsOverviewAllocationChartDataField = document.querySelector(
  '#investmentsOverviewAllocationChartDataField'
);
let cumulativeNetInvestmentChartData = JSON.parse(
  investmentsOverviewCumulativeNetInvestmentChartDataField.value
);
let allocationChartData = JSON.parse(
  investmentsOverviewAllocationChartDataField.value
);
let investmentsOverviewCumulativeNetInvestmentChartMonths = []
let investmentsOverviewCumulativeNetInvestmentPortfolioValues = []
let investmentsOverviewCumulativeNetInvestmentChartDataFormatted = []

//
for (const [order, interval] of Object.entries(cumulativeNetInvestmentChartData)) {
  investmentsOverviewCumulativeNetInvestmentChartMonths.push(interval['month']);
  investmentsOverviewCumulativeNetInvestmentChartDataFormatted.push(interval['net_investment']);
  investmentsOverviewCumulativeNetInvestmentPortfolioValues.push(interval['portfolio_value']);
}

// Build slices for pie chart
investmentsOverviewAllocationChartSlices = [];
// assetLocationChartData is rendered in the Django template
for (const [assetClass, allocation] of Object.entries(allocationChartData)) {
  investmentsOverviewAllocationChartSlices.push({
    name: assetClass,
    y: parseFloat(allocation)
  });
}


// Funcs

// Build area chart
Highcharts.chart(cumulativeNetInvestmentChart, {
  title: {
    text: ''
  },
  xAxis: {
    categories: investmentsOverviewCumulativeNetInvestmentChartMonths
  },
  yAxis: {
    title: {
      text: ''
    }
  },
  series: [{
    type: 'area',
    name: 'Portfolio Value',
    data: investmentsOverviewCumulativeNetInvestmentPortfolioValues,
  }, {
    type: 'line',
    name: 'Cumulative Net Investment',
    data: investmentsOverviewCumulativeNetInvestmentChartDataFormatted,
    color: '#0F487F',
    marker: {
        lineWidth: 2,
        lineColor: '#0F487F',
        fillColor: 'white'
    }
  }],
  plotOptions: {
    area: {
        fillColor: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            stops: [
                [0, '#009DDC'],
                [1, '#ffffff']
            ]
        },
        marker: {
            radius: 2
        },
        lineWidth: 1,
        states: {
            hover: {
                lineWidth: 1
            }
        },
        threshold: 0
    }
  }
});

// Build allocation chart
Highcharts.chart(investmentsOverviewAllocationChart.id, {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
    // height: 360
  },
  title: {
    text: '' // empty string left to override chart title
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      colors: ['#009DDC', '#0F487F', '#222222'],
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
    data: investmentsOverviewAllocationChartSlices
  }],
  exporting: {
    enabled: false
  }
});