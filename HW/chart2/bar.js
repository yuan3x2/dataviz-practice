d3.csv('chart2/whichcountry.csv').then(    
    barres => {
        drawbarchat(barres);
    }
);

function drawbarchat(barres)
{
    console.log(barres);

    let barGraph = document.getElementById("barGraph");

    let bartrace1 = {};
    bartrace1.type = "bar";
    bartrace1.name = "Asia";
    bartrace1.x = [];
    bartrace1.y = [];


    for(let i=0; i<barres.length; i++)
    {
        bartrace1.x[i] = barres[i]["date"];
        bartrace1.y[i] = barres[i]["Asia"];
    }


    let bartrace2 = {};
    bartrace2.type = "bar";
    bartrace2.name = "America";
    bartrace2.x = [];
    bartrace2.y = [];


    for(let i=0; i<barres.length; i++)
    {
        bartrace2.x[i] = barres[i]["date"];
        bartrace2.y[i] = barres[i]["America"];
    }

    let bartrace3 = {};
    bartrace3.type = "bar";
    bartrace3.name = "Europe";
    bartrace3.x = [];
    bartrace3.y = [];


    for(let i=0; i<barres.length; i++)
    {
        bartrace3.x[i] = barres[i]["date"];
        bartrace3.y[i] = barres[i]["Europe"];
    }

    let bartrace4 = {};
    bartrace4.type = "bar";
    bartrace4.name = "Oceania and Africa";
    bartrace4.x = [];
    bartrace4.y = [];


    for(let i=0; i<barres.length; i++)
    {
        bartrace4.x[i] = barres[i]["date"];
        bartrace4.y[i] = barres[i]["Oceania and Africa"];
    }


    let bardata = [];
    bardata.push(bartrace1);
    bardata.push(bartrace2);
    bardata.push(bartrace3);
    bardata.push(bartrace4);


    let barlayout = {
        margin:{t:50}, //離上面多遠
        title:"國人出國旅遊地區"
    };

    Plotly.newPlot(barGraph, bardata, barlayout);
}