d3.csv('chart1/travel.csv').then(    
    lineres => {
        drawlinechat(lineres);
    }
);

function drawlinechat(lineres)
{
    console.log(lineres);

    let lineGraph = document.getElementById("lineGraph");

    let linetrace1 = {};
    linetrace1.mode = "lines+markers";
    linetrace1.type = "scatter";
    linetrace1.name = "歷年國人出國人數";
    linetrace1.marker = {
        size : 10,
        color : 'orange'
    };
    linetrace1.x = [];
    linetrace1.y = [];

    for(let i=0; i<lineres.length; i++)
    {
        linetrace1.x[i] = lineres[i]['date'];
        linetrace1.y[i] = lineres[i]['numofpeopleintaiwan'];
    }

    let linetrace2 = {};
    linetrace2.mode = "lines+markers";
    linetrace2.type = "scatter";
    linetrace2.name = "歷年來台旅客人數";
    linetrace2.marker = {
        size : 10,
        color : 'blue'
    };
    linetrace2.x = [];
    linetrace2.y = [];

    for(let i=0; i<lineres.length; i++)
    {
        linetrace2.x[i] = lineres[i]['date'];
        linetrace2.y[i] = lineres[i]['numofpeopleothercountry'];
    }

    

    let linedata = [];
    linedata.push(linetrace1);
    linedata.push(linetrace2);

    let linelayout = {
        margin:{t:50}, //離上面多遠
        title:"台灣近年旅遊人數統計",
        xaxis:{range:[2012,2023]},
        yaxis:{range:[10000, 20000000]},

        updatemenus:[
            {
                y:1.2,
                x:0.3,
                yanchor:'top',
                buttons:[
                    {
                        method:'restyle',
                        args:['visible', [true, true]],
                        label:'ALL'
                    },
                    {
                        method:'restyle',
                        args:['visible', [true, false]],
                        label:'Taiwanese'
                    },
                    {
                        method:'restyle',
                        args:['visible', [false, true]],
                        label:'Foreigner'
                    },
                ]
            }
        ]
    };

    Plotly.newPlot(lineGraph, linedata, linelayout);
}