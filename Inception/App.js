const parent=React.createElement("div",{id:"Parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"h1 tag"),React.createElement("h2",{},"H2 tag")]),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"h1 tag"),React.createElement("h2",{},"H2 tag")])
]
); 

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);