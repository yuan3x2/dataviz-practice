d3.csv('chart3/differentcountry.csv').then(    
    pie2res => {
        drawpie2chat(pie2res);
    }
);

function drawpie2chat(pie2res)
{
    let pie2Graph = document.getElementById("pie2Graph");

    let pie2trace2 = {};
    pie2trace2.type = "pie";
    pie2trace2.title = "America";
    pie2trace2.labels = [];
    pie2trace2.values = [];
    pie2trace2.hole = 0.5

    for(let x=0; x<4; x++)
    {
        pie2trace2.labels[x] = pie2res[x]["America"];
        pie2trace2.values[x] = pie2res[x]["Americanum"];
    }

    
    let pie2data = [];
    pie2data.push(pie2trace2);

    let pie2layout = {
        margin:{
            t:30
        },
        height: 500,  // 設定高度
        width: 470,
        
    };

    Plotly.newPlot(pie2Graph, pie2data, pie2layout);
}