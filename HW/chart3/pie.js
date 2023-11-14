d3.csv('chart3/differentcountry.csv').then(    
    pieres => {
        drawpiechat(pieres);
    }
);

function drawpiechat(pieres)
{
    let pieGraph = document.getElementById("pieGraph");

    let pietrace1 = {};
    pietrace1.type = "pie";
    pietrace1.title = "Asia";
    pietrace1.labels = [];
    pietrace1.values = [];
    pietrace1.hole = 0.5; // 空心圓

    for(let x=0; x<14; x++)
    {
        pietrace1.labels[x] = pieres[x]["Asia"];
        pietrace1.values[x] = pieres[x]["Asianum"];
    }

    let piedata = [];
    piedata.push(pietrace1);

    let pielayout = {
        margin:{
            t:30
        },
        height: 500,  // 設定高度
        width: 550 ,
        
    };

    Plotly.newPlot(pieGraph, piedata, pielayout);
}