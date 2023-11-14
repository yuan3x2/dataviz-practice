d3.csv('chart2/whichcountry.csv').then(    
    bar2res => {
        drawbar2chat(bar2res);
    }
);

function drawbar2chat(bar2res)
{
    console.log(bar2res);

    let bar2Graph = document.getElementById("bar2Graph");

    let bar2trace1 = {};
    bar2trace1.type = "bar";
    bar2trace1.name = "Asia";
    bar2trace1.x = [];
    bar2trace1.y = [];


    for(let i=0; i<bar2res.length; i++)
    {
        bar2trace1.x[i] = bar2res[i]["date"];
        bar2trace1.y[i] = bar2res[i]["Asia"];
    }


    let bar2trace2 = {};
    bar2trace2.type = "bar";
    bar2trace2.name = "America";
    bar2trace2.x = [];
    bar2trace2.y = [];


    for(let i=0; i<bar2res.length; i++)
    {
        bar2trace2.x[i] = bar2res[i]["date"];
        bar2trace2.y[i] = bar2res[i]["America"];
    }

    let bar2trace3 = {};
    bar2trace3.type = "bar";
    bar2trace3.name = "Europe";
    bar2trace3.x = [];
    bar2trace3.y = [];


    for(let i=0; i<bar2res.length; i++)
    {
        bar2trace3.x[i] = bar2res[i]["date"];
        bar2trace3.y[i] = bar2res[i]["Europe"];
    }

    let bar2trace4 = {};
    bar2trace4.type = "bar";
    bar2trace4.name = "Oceania and Africa";
    bar2trace4.x = [];
    bar2trace4.y = [];


    for(let i=0; i<bar2res.length; i++)
    {
        bar2trace4.x[i] = bar2res[i]["date"];
        bar2trace4.y[i] = bar2res[i]["Oceania and Africa"];
    }


    let bar2data = [];
    bar2data.push(bar2trace1);
    bar2data.push(bar2trace2);
    bar2data.push(bar2trace3);
    bar2data.push(bar2trace4);


    let bar2layout = {
        margin:{t:50}, //離上面多遠
        title:"國人出國旅遊地區",
        barmode:"stack"
    };

    Plotly.newPlot(bar2Graph, bar2data, bar2layout);
}