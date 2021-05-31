const barChartOptions = {
    'chart': {
        'type':'bar',
        'height':'100%'
    },
    'dataLabels': {
        'enabled': false,
      },
    'series':[],
    'noData':{
        'text':"Please wait, loading data"
    }
}

const barChart = new ApexCharts(document.querySelector('#barchart'), barChartOptions);
barChart.render();

// global variable
let barTotalData;
let barFemaleData;
let barMaleData;

// event handlers
document.querySelector("#filter-btn2").addEventListener('click', function(){
  //updateTable("cTest.json");

    let startYearBar = parseInt(document.querySelector('#start-year-bar').value);
    let endYearBar = parseInt(document.querySelector('#end-year-bar').value);
    //let inputSex = parse(document.querySelector('#sex').value);

    let barFiltered = barTotalData.filter(function(d){
        return d.x >= startYearBar && d.x <= endYearBar
    })
    let barFiltered2 = barFemaleData.filter(function(d){
        return d.x >= startYearBar && d.x <= endYearBar
    })
    let barFiltered3 = maleData.filter(function(d){
        return d.x >= startYearBar && d.x <= endYearBar
    })
    barChart.updateSeries([
        {
            'name': "Total drug abusers",
            'data': barFiltered
        },
        {
            'name': 'Female drug abusers',
            'data': barFiltered2
        },
        {
            'name': 'Male drug abusers',
            'data': barFiltered3
        },


    ])
})

window.addEventListener('DOMContentLoaded',async function(){
barTotalData = await loadBarTotalData('./cTest.json');
barTotalData = transformBarTotalData(barTotalData);
barFemaleData = await loadBarFemaleData("./cTest.json");
barFemaleData = transformBarFemaleData(barFemaleData);
barMaleData = await loadBarMaleData('./cTest.json');
barMaleData = transformBarMaleData(barMaleData);

barChart.updateSeries([
{
   'name':'Total drug abusers',
   'data': barTotalData
},
{
  'name': 'Female drug abusers',
  'data': barFemaleData
},
{
  'name': 'Male drug abusers',
  'data': barMaleData
}
])
})
