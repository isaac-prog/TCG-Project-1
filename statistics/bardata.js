//Total
async function loadBarTotalData(url) {
    const response = await axios.get(url);
    return response.data.Level1;
}

function transformBarTotalData(rawData){
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
    return series;
}

//Female

async function loadBarFemaleData(url) {
    const response = await axios.get(url);
    return response.data.Level2;
}

function transformBarFemaleData(rawData){
    // accumulator array that will store the final
    // results
    let series = [];

    for (let datnum of rawData) {
        // recreate the data point in the format
        // that apex chart expects
        if(datnum.level_2 == "Female"){
        series.push({
            'x': parseInt(datnum.year),
            'value': parseInt(datnum.level_1),
            'sex': datnum.level_2,
            'y': parseFloat(datnum.value)
        })
        }
    }
    return series;
}

//male

async function loadBarMaleData(url) {
    const response = await axios.get(url);
    return response.data.Level2;
}

function transformBarMaleData(rawData){
    // accumulator array that will store the final
    // results
    let series = [];

    for (let datnum of rawData) {
        // recreate the data point in the format
        // that apex chart expects
        if(datnum.level_2 == "Male"){
        series.push({
            'x': parseInt(datnum.year),
            'value': parseInt(datnum.level_1),
            'sex': datnum.level_2,
            'y': parseFloat(datnum.value)
        })
        }
    }
    return series;
}