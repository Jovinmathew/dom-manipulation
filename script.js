const container = document.querySelector("#container");

// Paragraph
const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey I'm red!";
container.appendChild(para);

// Heading
const heading = document.createElement("h3");
heading.style.color = "blue";
heading.textContent = "I'm a blue h3!";
container.appendChild(heading);

// Div
const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";
div.style.padding = "10px";

const divHeader = document.createElement("h1");
divHeader.textContent = "I'm in a div";

const divPara = document.createElement("p");
divPara.textContent = "ME TOO!";

div.append(divHeader, divPara);
container.appendChild(div);