let obj = [
  {
    value: "div",
    nodes: [
      {
        value: "div",
        nodes: [
          {
            value: "John"
          },
          {
            value: "a",
            nodes: [
              {
                value: "span"
              }
            ]
          }
        ]
      },
      {
        value: "div",
        nodes: [
          {
            value: "Smith"
          }
        ]
      }
    ]
  }
];
let tag1;
let htmlFormation = () => {
  for (let i = 0; i < obj.length; i++) {
    let createElt = document.createElement(obj[i].value);
    if (createElt.toString() !== "[object HTMLUnknownElement]") {
      tag1 = createElt;
    }
    if (obj[i].nodes && obj[i].nodes.length > 0) {
      innerNodes(tag1, obj[i].nodes);
    }
  }
  document.getElementById("app").appendChild(tag1);
  console.log(tag1);
};
let innerNodes = (parentNode, innerObj) => {
  let tag2;
  for (let l = 0; l < innerObj.length; l++) {
    let createElt = document.createElement(innerObj[l].value);
    if (createElt.toString() !== "[object HTMLUnknownElement]") {
      tag2 = createElt;
      parentNode.appendChild(tag2);
    } else {
      parentNode.textContent = innerObj[l].value;
    }
    if (innerObj[l].nodes && innerObj[l].nodes.length > 0) {
      innerNodes(tag2, innerObj[l].nodes);
    }
  }
};

htmlFormation();
