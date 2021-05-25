async function loadData(url) {
    const response = await axios.get(url);
    console.log(response.data.Level1);
    console.log("load1");
    return response.data.Level1;
}


function transformData(rawData){
    // accumulator array that will store the final
    // results
    let series = [];
    for (let datnum of rawData) {
        // recreate the data point in the format
        // that apex chart expects
        series.push({
            'x': parseInt(datnum.year),
            'value': parseInt(datnum.level_1),
            'y': parseFloat(datnum.value)
        })
    }
    console.log(series);
    console.log("series1");
    return series;
}


async function loadData2(url) {
    const response = await axios.get(url);
    console.log(response.data.Level2);    
    console.log("load2");
    return response.data.Level2;
}

function transformData2(rawData){
    // accumulator array that will store the final
    // results
    let series = [];
    console.log(rawData);
    for (let datnum of rawData) {
        // recreate the data point in the format
        // that apex chart expects
        series.push({
            'x': parseInt(datnum.year),
            'value': parseInt(datnum.level_1),
            'sex': datnum.level_2,
            'y': parseFloat(datnum.value)

        })
    }
    console.log("series2");
    return series;
}
