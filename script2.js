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
let preFilter;

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
    
    chart.updateSeries([
        {
            'name': "Druggies",
            'data': filtered
        }
    ])
})

// wait for all the DOM elements
// to be created then load in the CSV file

window.addEventListener('DOMContentLoaded', async function(){
    data = await loadData('https://www.tablebuilder.singstat.gov.sg/publicfacing/api/json/title/17079.json');
    data = transformData(data);

    chart.updateSeries([
        {
            'name':'Druggies',
            'data': data
        }
    ])
})

window.addEventListener('DOMContentLoaded',async function(){
    preFilter = await loadData2('https://www.tablebuilder.singstat.gov.sg/publicfacing/api/json/title/17079.json');
    preFilter = transformData2(preFilter);

    chart.updateSeries([
        {
            'name':'Druggies',
            'data': preFilter
        }
    ])
})
