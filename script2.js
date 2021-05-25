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
let data;
let data2;
let data3;

// event handlers
document.querySelector("#filter-btn").addEventListener('click', function(){
  //Trying to change/update the chart to the 2nd Data with Sex
  //updateTable("cTest.json");

    let startYear = parseInt(document.querySelector('#start-year').value);
    let endYear = parseInt(document.querySelector('#end-year').value);
    //let inputSex = parse(document.querySelector('#sex').value);

    let filtered = data.filter(function(d){
        return d.x >= startYear && d.x <= endYear //&& d.sex == inputSex;
    })
    let filtered2 = data2.filter(function(d){
        return d.x >= startYear && d.x <= endYear //&& d.sex == inputSex;
    })
    let filtered3 = data3.filter(function(d){
        return d.x >= startYear && d.x <= endYear //&& d.sex == inputSex;
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
data = await loadData('https://www.tablebuilder.singstat.gov.sg/publicfacing/api/json/title/17079.json');
data = transformData(data);
data2 = await loadData2("https://www.tablebuilder.singstat.gov.sg/publicfacing/api/json/title/17079.json");
data2 = transformData2(data2);
data3 = await loadData3('https://www.tablebuilder.singstat.gov.sg/publicfacing/api/json/title/17079.json');
data3 = transformData3(data3);

chart.updateSeries([
{
   'name':'Total drug abusers',
   'data': data
},
{
  'name': 'Female drug abusers',
  'data': data2
},
{
  'name': 'Male drug abusers',
  'data': data3
}
])
})



