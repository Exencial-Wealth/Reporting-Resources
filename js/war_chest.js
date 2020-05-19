/*
  War Chest Report JavaScript
*/


// Variables

const warChestProjectionChart = document.querySelector(
  '#warChestProjectionChart'
);
const warChestAllocationChart = document.querySelector(
  '#warChestAllocationChart'
);
let warChestProjectionChartData = [];
let warChestAllocationChartData = [];


// Funcs

function getWarChestProjectionChartData(){
  const warChestProjectionChartDataField = document.querySelector(
    '#warChestProjectionChartDataField'
  );
  let chartData = JSON.parse(
    warChestProjectionChartDataField.value
  ).data;

  // loop over each projection
  for (let projection of chartData) {
    //
    warChestProjectionChartData.push([
      parseInt(projection['year']),
      parseInt(projection['value'])
    ]);
  }
}

function getWarChestAllocationChartData(){
  const warChestAllocationChartDataField = document.querySelector(
    '#warChestAllocationChartDataField'
  );
  let chartData = JSON.parse(
    warChestAllocationChartDataField.value
  );

  // loop over each allocation
  for (let [key, value] of Object.entries(chartData)) {
    // append an object to the list of chart pie slices
    // containing the slice name and value
    warChestAllocationChartData.push({
      'name': key,
      'y': value
    });
  }
}


// Listeners

getWarChestProjectionChartData(
  warChestProjectionChartDataField
);

getWarChestAllocationChartData(
  warChestAllocationChartDataField
);

// Build projection chart
Highcharts.chart(warChestProjectionChart, {
  chart: {
    type: 'column',
    height: 280
  },
  title: {
    text: ''
  },
  yAxis: {
    title: {
      enabled: false
    },
    min: 0
  },
  xAxis: {
    type: 'category',
    labels: {
      rotation: 0,
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif'
      }
    }
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true
      }
    }
  },
  series: [{
    name: 'USD',
    data: warChestProjectionChartData,
    color: '#009DDC',
    dataLabels: {
      enabled: false
    }
  }]
});

// Build allocation chart
// Highcharts.chart(warChestAllocationChart, {
//   chart: {
//     plotBackgroundColor: null,
//     plotBorderWidth: null,
//     plotShadow: false,
//     type: 'pie',
//     height: 280
//   },
//   title: {
//     text: '' // empty string left to override chart title
//   },
//   tooltip: {
//     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//   },
//   plotOptions: {
//     pie: {
//       colors: ['#009DDC', '#0F487F', '#222222'],
//       allowPointSelect: true,
//       cursor: 'pointer',
//       dataLabels: {
//         enabled: true,
//         format: '<b>{point.name}</b><br>{point.percentage:.1f} %'
//       }
//     }
//   },
//   series: [{
//     name: 'Share',
//     data: warChestAllocationChartData
//   }],
//   exporting: {
//     enabled: false
//   }
// });

Highcharts.chart(warChestAllocationChart, {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
    height: 280
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
      colors: ['#0F487F','#009DDC', '#222222'],
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
        distance: -50,
        filter: {
          property: 'percentage',
          operator: '>',
          value: 4
        }
      }
    }
  },
  series: [{
    name: 'Share',
    data: warChestAllocationChartData
  }]
});