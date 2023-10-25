/* lesson1
let myGrahp = document.getElementById("myGraph");
Plotly.newPlot(myGraph, 
    [{
        x:[1,2,3,4,5],
        y:[1,2,4,8,5]
    }],
    {
        margin:{t:30} //離上面多遠
    }
);
*/

/* lesson2
let myGrahp = document.getElementById("myGraph");

let trace1 = {};
trace1.mode = "markers+text";
trace1.type = "scatter";
trace1.name = "Team A";
trace1.marker = {
    size : 10
};
trace1.x = [];
trace1.y = [];
trace1.text = [];
trace1.textposition = "bottom left";
trace1.textfont ={
    family:"Raleway, sans-serif",
    size:15
};

for(let i=0; i<set1.length; i++)
{
    trace1.x[i] = set1[i][0];
    trace1.y[i] = set1[i][1];
    trace1.text[i] = set1[i][2];
}

let trace2 = {};
trace2.mode = "lines";
trace2.type = "scatter";
trace2.name = "Team B";
trace2.x = [];
trace2.y = [];
trace2.text = [];

for(let i=0; i<set2.length; i++)
{
    trace2.x[i] = set2[i][0];
    trace2.y[i] = set2[i][1];
    trace2.text[i] = set2[i][2];
}

let trace3 = {};
trace3.mode = "lines+markers";
trace3.type = "scatter";
trace3.name = "Team C";
trace3.marker = {
    size : 10
};
trace3.x = [];
trace3.y = [];
trace3.text = [];

for(let i=0; i<set3.length; i++)
{
    trace3.x[i] = set3[i][0];
    trace3.y[i] = set3[i][1];
    trace3.text[i] = set3[i][2];
}

let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);


let layout = {
    margin:{t:50}, //離上面多遠
    xaxis:{range:[0,6]},
    yaxis:{range:[0,25]},
    title:"Scatter & Line"
};

Plotly.newPlot(myGraph, data, layout);
*/

/* lesson5
let myGrahp = document.getElementById("myGraph");

let trace1 = {};
trace1.mode = "markers+text";
trace1.type = "scatter";
trace1.name = "Team A";
//trace1.visible = true;
trace1.marker = {
    size : 10
};
trace1.x = [];
trace1.y = [];
trace1.text = [];
trace1.textposition = "bottom left";
trace1.textfont ={
    family:"Raleway, sans-serif",
    size:15
};

for(let i=0; i<set1.length; i++)
{
    trace1.x[i] = set1[i][0];
    trace1.y[i] = set1[i][1];
    trace1.text[i] = set1[i][2];
}

let trace2 = {};
trace2.mode = "lines";
trace2.type = "scatter";
trace2.name = "Team B";
//trace2.visible = false;
trace2.x = [];
trace2.y = [];
trace2.text = [];

for(let i=0; i<set2.length; i++)
{
    trace2.x[i] = set2[i][0];
    trace2.y[i] = set2[i][1];
    trace2.text[i] = set2[i][2];
}

let trace3 = {};
trace3.mode = "lines+markers";
trace3.type = "scatter";
trace3.name = "Team C";
//trace3.visible = false;
trace3.marker = {
    size : 10
};
trace3.x = [];
trace3.y = [];
trace3.text = [];

for(let i=0; i<set3.length; i++)
{
    trace3.x[i] = set3[i][0];
    trace3.y[i] = set3[i][1];
    trace3.text[i] = set3[i][2];
}

let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);


let layout = {
    margin:{t:50}, //離上面多遠
    xaxis:{range:[0,6]},
    yaxis:{range:[0,25]},
    title:"Scatter & Line",
    updatemenus:[
        {
            y:1.2,
            x:0.3,
            yanchor:'top',
            buttons:[
                {
                    method:'restyle',
                    args:['visible', [true, false, false]],
                    label:'Team A'
                },
                {
                    method:'restyle',
                    args:['visible', [false, true, false]],
                    label:'Team B'
                },
                {
                    method:'restyle',
                    args:['visible', [false, false, true]],
                    label:'Team C'
                },
                {
                    method:'restyle',
                    args:['visible', [true, true, true]],
                    label:'DIsplay All'
                },
            ]
        }
    ]
};

Plotly.newPlot(myGraph, data, layout);
*/