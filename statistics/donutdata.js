async function loadDonutMaleData(url) {
    const response = await axios.get(url);
    return response.data.Level2;
}

let maleSum = 0;

function transformDonutMaleData(rawData){
    // accumulator array that will store the final
    // results
    let series = [];

    for (let datnum of rawData) {
        // recreate the data point in the format
        // that apex chart expects

        if(datnum.level_2 == "Male"){
        series.push({
            'x': parseInt(datnum.year),
            'y': maleSum += parseFloat(datnum.value)
        })
        }
    }

    const lastItem = series[series.length - 1];
    series = [];
    series.push(lastItem.y);
    return series;
}


async function loadDonutFemaleData(url) {
    const response = await axios.get(url);
    return response.data.Level2;
}

let femaleSum = 0;

function transformDonutFemaleData(rawData){
    // accumulator array that will store the final
    // results
    let series = [];

    for (let datnum of rawData) {
        // recreate the data point in the format
        // that apex chart expects

        if(datnum.level_2 == "Female"){
        series.push({
            'x': parseInt(datnum.year),
            'y': femaleSum += parseFloat(datnum.value)
        })
        }
    }
    
    console.log(series)
    const lastItem = series[series.length - 1];
    series = [];
    let labels = [];
    labels.push("female")
    series.push(lastItem.y);
    console.log(series)
    return series;
}