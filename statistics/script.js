const chartOptions = {
    'chart': {
        'type':'line',
        'height':'100%'
    },
    'series':[],
    'noData':{
        'text':"Please wait, loading data"
    }
}

const chart = new ApexCharts(document.querySelector('#chart'), chartOptions);
chart.render();

// global variable
let totalData;
let famaleData;
let maleData;

// event handlers
document.querySelector("#filter-btn").addEventListener('click', function(){
  //updateTable("cTest.json");

    let startYear = parseInt(document.querySelector('#start-year').value);
    let endYear = parseInt(document.querySelector('#end-year').value);
    //let inputSex = parse(document.querySelector('#sex').value);

    let filtered = totalData.filter(function(d){
        return d.x >= startYear && d.x <= endYear
    })
    let filtered2 = femaleData.filter(function(d){
        return d.x >= startYear && d.x <= endYear
    })
    let filtered3 = maleData.filter(function(d){
        return d.x >= startYear && d.x <= endYear
    })
    chart.updateSeries([
        {
            'name': "Total drug abusers",
            'data': filtered
        },
        {
            'name': 'Female drug abusers',
            'data': filtered2
        },
        {
            'name': 'Male drug abusers',
            'data': filtered3
        },


    ])
})

window.addEventListener('DOMContentLoaded',async function(){
totalData = await loadTotalData('./cTest.json');
totalData = transformTotalData(totalData);
femaleData = await loadFemaleData("./cTest.json");
femaleData = transformFemaleData(femaleData);
maleData = await loadMaleData('./cTest.json');
maleData = transformMaleData(maleData);

chart.updateSeries([
{
   'name':'Total drug abusers',
   'data': totalData
},
{
  'name': 'Female drug abusers',
  'data': femaleData
},
{
  'name': 'Male drug abusers',
  'data': maleData
}
])
})
