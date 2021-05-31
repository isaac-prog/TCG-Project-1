const donutChartOptions = {
    'chart': {
      'type': 'donut',
      'height': '100%'
    },
    'fill': {
      'type': 'gradient',
    },
    'colors': ['#FFD700', '#E91E63'],
      'series': [],
      'labels': ['Male', 'Female'],
      'noData': {
        'text': "Please wait, loading data"
      }
    }
  
  var donutChart = new ApexCharts(document.querySelector("#donutchart"), donutChartOptions);
    donutChart.render();
  
    let donutMaleData;
    let donutFemaleData;
  
  
    window.addEventListener('DOMContentLoaded', async function () {
      donutMaleData = await loadDonutMaleData('./cTest.json');
      donutMaleData = transformDonutMaleData(donutMaleData);
      donutFemaleData = await loadDonutFemaleData('./cTest.json');
      donutFemaleData = transformDonutFemaleData(donutFemaleData);
      let donut = donutMaleData.concat(donutFemaleData)
      donutChart.updateSeries(donut)
    })
  