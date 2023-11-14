d3.csv('chart3/differentcountry.csv').then(    
    pie4res => {
        drawpie4chat(pie4res);
    }
);

function drawpie4chat(pie4res)
{
    let pie4Graph = document.getElementById("pie4Graph");

    let pie4trace4 = {};
    pie4trace4.type = "pie";
    pie4trace4.title = "Oceania and Africa";
    pie4trace4.labels = [];
    pie4trace4.values = [];
    pie4trace4.domain = {
        row : 1,
        column : 1
    };
    pie4trace4.hole = 0.5

    for(let x=0; x<6; x++)
    {
        pie4trace4.labels[x] = pie4res[x]["Oceania and Africa"];
        pie4trace4.values[x] = pie4res[x]["Oceania and Africa num"];
    }

    let pie4data = [];
    pie4data.push(pie4trace4);


    let pie4layout = {
        margin:{
            t:30
        },
        height: 500,  // 設定高度
        width: 500,
        
    };

    Plotly.newPlot(pie4Graph, pie4data, pie4layout);
}