/* lesson1
let myGraph = document.getElementById("myGraph");
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
let myGraph = document.getElementById("myGraph");

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

/* lesson3
let myGraph = document.getElementById("myGraph");

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

/* lesson4
let myGraph = document.getElementById("myGraph");

let trace1 = {};
trace1.type = "bar";
trace1.name = "Taipei Zoo";
trace1.x = [];
trace1.y = [];

for(let i=0; i<animals_Taipei_Zoo.length; i++)
{
    trace1.x[i] = animals_Taipei_Zoo[i]["name"];
    trace1.y[i] = animals_Taipei_Zoo[i]["count"];
}


let trace2 = {};
trace2.type = "bar";
trace2.name = "Taoyuan Zoo";
trace2.x = [];
trace2.y = [];

for(let i=0; i<animals_Taoyuan_Zoo.length; i++)
{
    trace2.x[i] = animals_Taoyuan_Zoo[i]["name"];
    trace2.y[i] = animals_Taoyuan_Zoo[i]["count"];
}

let data = [];
data.push(trace1);
data.push(trace2);


let layout = {
    margin:{t:0}, //離上面多遠
    barmode:"stack" //讓bar堆疊起來
};

Plotly.newPlot(myGraph, data, layout);
*/

/* lesson 4-2
let myGraph = document.getElementById("myGraph");

let trace1 = {};
trace1.type = "bar";
trace1.name = "lion";
trace1.color = ("red");
trace1.x = [];
trace1.y = [];

trace1.x[0] = "Taipei Zoo";
trace1.x[1] = "Taoyuan Zoo";
trace1.y[0] = animals_Taipei_Zoo[0]["count"];
trace1.y[1] = animals_Taoyuan_Zoo[0]["count"];

trace1.text = trace1.y;
trace1.textfont = {
    color:"white"
};

let trace2 = {};
trace2.type = "bar";
trace2.name = "tiger";
trace2.color = "light purple";
trace2.x = [];
trace2.y = [];

trace2.x[0] = "Taipei Zoo";
trace2.x[1] = "Taoyuan Zoo";
trace2.y[0] = animals_Taipei_Zoo[1]["count"];
trace2.y[1] = animals_Taoyuan_Zoo[1]["count"];

trace2.text = trace2.y;
trace2.textfont = {
    color:"white"
};

let trace3 = {};
trace3.type = "bar";
trace3.name = "monkey";
trace3.color = "yellow";
trace3.x = [];
trace3.y = [];

trace3.x[0] = "Taipei Zoo";
trace3.x[1] = "Taoyuan Zoo";
trace3.y[0] = animals_Taipei_Zoo[2]["count"];
trace3.y[1] = animals_Taoyuan_Zoo[2]["count"];

trace3.text = trace3.y;
trace3.textfont = {
    color:"yellow"
};

let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);

let layout = {
    margin:{t:0}, //離上面多遠
    barmode:"stack" //讓bar堆疊起來
    
};

Plotly.newPlot(myGraph, data, layout);

*/

/* lesson 5*/
let myGraph = document.getElementById("myGraph");

let trace1 = {};
trace1.type = "pie";
trace1.title = "機器學習概論";
trace1.labels = [];
trace1.values = [];
trace1.domain = {
    row : 0,
    column : 0
};
trace1.hole = 0.5; // 空心圓

for(let x=0; x<evaluation_ratio_1.length; x++)
{
    trace1.labels[x] = evaluation_ratio_1[x]["name"];
    trace1.values[x] = evaluation_ratio_1[x]["count"];
}

let trace2 = {};
trace2.type = "pie";
trace2.title = "資料視覺化";
trace2.labels = [];
trace2.values = [];
trace2.domain = {
    row : 0,
    column : 1
};

for(let x=0; x<evaluation_ratio_2.length; x++)
{
    trace2.labels[x] = evaluation_ratio_2[x]["name"];
    trace2.values[x] = evaluation_ratio_2[x]["count"];
}

let trace3 = {};
trace3.type = "pie";
trace3.title = "人工智慧與永續發展";
trace3.labels = [];
trace3.values = [];
trace3.domain = {
    row : 1,
    column : 0
};

for(let x=0; x<evaluation_ratio_3.length; x++)
{
    trace3.labels[x] = evaluation_ratio_3[x]["name"];
    trace3.values[x] = evaluation_ratio_3[x]["count"];
}

let trace4 = {};
trace4.type = "pie";
trace4.title = "Python程式設計";
trace4.labels = [];
trace4.values = [];
trace4.domain = {
    row : 1,
    column : 1
};

for(let x=0; x<evaluation_ratio_4.length; x++)
{
    trace4.labels[x] = evaluation_ratio_4[x]["name"];
    trace4.values[x] = evaluation_ratio_4[x]["count"];
}

let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);
data.push(trace4);


let layout = {
    margin:{
        t:10,
        l:0,
    },
    grid:{
        rows:2,
        columns:2
    }
};

Plotly.newPlot(myGraph, data, layout);
