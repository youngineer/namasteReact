// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Srinivasa Govninda!"
//     );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(heading);

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        React.createElement("h2", {id: "h1 element"}, "This is the h1 element"))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


console.log(parent);