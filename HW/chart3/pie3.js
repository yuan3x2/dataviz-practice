d3.csv('chart3/differentcountry.csv').then(    
    pie3res => {
        drawpie3chat(pie3res);
    }
);

function drawpie3chat(pie3res)
{
    let pie3Graph = document.getElementById("pie3Graph");

    let pie3trace3 = {};
    pie3trace3.type = "pie";
    pie3trace3.title = "Europe";
    pie3trace3.labels = [];
    pie3trace3.values = [];
    pie3trace3.domain = {
        row : 1,
        column : 0
    };
    pie3trace3.hole = 0.5

    for(let x=0; x<9; x++)
    {
        pie3trace3.labels[x] = pie3res[x]["Europe"];
        pie3trace3.values[x] = pie3res[x]["Europenum"];
    }

    let pie3data = [];
    pie3data.push(pie3trace3);


    let pie3layout = {
        margin:{
            t:30
        },
        height: 500,  // 設定高度
        width: 500,
        
    };

    Plotly.newPlot(pie3Graph, pie3data, pie3layout);
}