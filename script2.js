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
    let filtered2 = data.filter(function(d){
        return d.x >= startYear && d.x <= endYear //&& d.sex == inputSex;
    })
    let filtered3 = data.filter(function(d){
        return d.x >= startYear && d.x <= endYear //&& d.sex == inputSex;
    })
    chart.updateSeries([
        {
            'name': "Druggies",
            'data': filtered
        },
        {
            'name': 'Druggies-female',
            'data': filtered2
        },
        {
            'name': 'Druggies-male',
            'data': filtered3
        },


    ])
})

window.addEventListener('DOMContentLoaded',async function(){
data = await loadData('cTest.json');
data = transformData(data);
data2 = await loadData2("cTest.json");
data2 = transformData2(data2);
data3 = await loadData3('cTest.json');
data3 = transformData3(data3);

chart.updateSeries([
{
   'name':'Druggies',
   'data': data
},
{
  'name': 'Druggies-female',
  'data': data2
},
{
  'name': 'Druggies-male',
  'data': data3
}
])
})

// wait for all the DOM elements
// to be created then load in the CSV file


//female



