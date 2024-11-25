const closeBtn = document.querySelector(".popup-close");
const elementCards = document.querySelectorAll(".element-box");
const popupContainer = document.querySelector(".popup-container");
const popup = document.querySelector(".popup");
const eleImg = document.querySelector(".ele-img");
const eleName = document.querySelector(".ele-name");
const eleNo = document.querySelector(".ele-no");
const eleMass = document.querySelector(".ele-mass");
const eleConfig = document.querySelector(".ele-e-config");
const eleDensity = document.querySelector(".ele-density");
const eleCrust = document.querySelector(".ele-crust");
const eleUni = document.querySelector(".ele-uni");
const slider = document.querySelector(".temp-slider");
const tempValue = document.querySelector(".temp-value");

let elements = [];

function popupUpdate(
  img,
  name,
  atNo,
  atMass,
  eConfig,
  density,
  crust,
  universe,
  element_name
) {
  elements.forEach((e) => {
    if (e.name == element_name) {
      img.src = e.img;
      name.innerText = e.name;
      atNo.innerText = e.atNo;
      atMass.innerText = e.atMass;
      eConfig.innerHTML = e.eConfig;
      density.innerText = e.density;
      crust.innerText = e.crust;
      universe.innerText = e.universe;
    }
  });
}

/*temp value update*/
function tempUpdate(temp) {
  slider.value = temp;
  tempValue.value = temp;
}

/*updating the color of elements */
function colorUpdate(temp) {
  elements.forEach((element) => {
    name = element.name;
    console.log(elementCards, name, element, element.boiling);
    elementCards.forEach((box) => {
      console.log(box);
      if (box.classList.contains(name)) {
        console.log(element.boiling);
        /*gass*/
        if (element.boiling < temp) {
          box.style.background = "white";
        }
        /*liquid*/
        if (element.boiling > temp && temp > element.melting) {
          box.style.background = "blue";
        }
        /*solid*/
        if (element.melting > temp) {
          box.style.background = "red";
        }
      }
    });
  });
}

/*working of popup */
closeBtn.addEventListener("click", () => {
  popupContainer.classList.remove("active");
  popup.classList.remove("active");
});

elementCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    element_name = e.target.children[3].innerText;
    popupUpdate(
      eleImg,
      eleName,
      eleNo,
      eleMass,
      eleConfig,
      eleDensity,
      eleCrust,
      eleUni,
      element_name
    );
    popupContainer.classList.add("active");
    popup.classList.add("active");
  });
});

/*update the display and slider with temperature value*/
slider.addEventListener("input", (e) => {
  console.log(e.target.value);
  tempUpdate(e.target.value);
  colorUpdate(e.target.value);
});

tempValue.addEventListener("input", (e) => {
  tempUpdate(e.target.value);
  colorUpdate(e.target.value);
});

/*Fetching data of elements from json and appending to elements*/

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    elements = data.map((element) => {
      return {
        img: element.img,
        name: element.name,
        atNo: element.atNo,
        atMass: element.atMass,
        eConfig: element.eConfig,
        density: element.density,
        crust: element.crust,
        universe: element.universe,
        boiling: element.boiling,
        melting: element.melting,
      };
    });
  });

/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/*New code */
/*youtuber code */
let availablekeywords = [];

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    availablekeywords = data.map((element) => element.name);
    // console.log(availablekeywords);
  });
/* */
const resultBox = document.querySelector(".result-box");
const inputBox = document.querySelector("#input-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;

  if (input.length) {
    result = availablekeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);

  if (!result.length) {
    resultBox.innerHTML = "";
  }
};

function display(result) {
  const content = result.map((list) => {
    return "<li onClick=selectInput(this)>" + list + "</li>";
  });

  resultBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectInput(list) {
  const element_name = list.innerHTML;
  inputBox.value = element_name;
  resultBox.innerHTML = "";

  popupUpdate(
    eleImg,
    eleName,
    eleNo,
    eleMass,
    eleConfig,
    eleDensity,
    eleCrust,
    eleUni,
    element_name
  );

  popupContainer.classList.add("active");
  popup.classList.add("active");
}
/*youtuber code */
/*New code */



/*This is for the animation happening outside the table*/
var colorArray = ["red", "orange"]; //colour of electrons
const atomicNo = 118; //i want to fetch this from json file

var electroniconfigtemplate = [
  //instead of this i want to fetch this from json
  [1, 0], //since configuration has many exceptions
  [2, 0],
  [2, 1],
  [3, 0],
  [3, 1],
  [4, 0],
  [3, 2],
  [4, 1],
  [5, 0],
  [4, 2],
  [5, 1],
  [6, 0],
  [4, 3],
  [5, 2],
  [6, 1],
  [7, 0],
  [5, 3],
  [6, 2],
  [7, 1],
];

let cnt = 0;
let electronicconfig = [0, 0, 0, 0, 0, 0, 0];
for (let k = 0; k < 19; k++) {
  let n = electroniconfigtemplate[k];
  let shell = n[0];
  let subShell = n[1];
  let electrons = 0;
  for (let m = -subShell; m < subShell + 1; m++) {
    for (let s = 0; s < 2; s++) {
      cnt++;
      electrons++;
      if (cnt == atomicNo) {
        break;
      }
    }
    if (cnt == atomicNo) {
      break;
    }
  }
  electronicconfig[shell - 1] = electronicconfig[shell - 1] + electrons; //if i get electronic config from
  if (cnt == atomicNo) {
    //json this code will be gone
    break;
  }
}

const finalelectronicconfig = electronicconfig; //making it final
const squareDiv = document.getElementById("square"); //assigning spans equal to
console.log(squareDiv + "squareDiv");
const squareDivs = document.getElementsByClassName("square"); //assigning spans equal to
console.log(squareDivs + "squareDivs");

for (let i = 0; i < atomicNo; i++) {
  //atomic no
  const childToAppend = document.createElement("span");
  childToAppend.className = "temp";
  squareDiv.appendChild(childToAppend);
}
const spans = document.querySelectorAll("span"); //storing all spans in nodelist

const bgOfPeriodicTable = document.getElementById("backgroundOfPeriodicTable"); //this part to make outer edge
let sqaureHeight = bgOfPeriodicTable.clientHeight; //of atom related to size of table

updateAtomEverything(); //i want to call this function when size changes

function updateAtomEverything() {
  console.log("00" + sqaureHeight + " sqHeight used for setting height");
  sqaureHeight = bgOfPeriodicTable.clientWidth / 18; //making bounding sqaure of atom
  document.getElementById("square").style.height = `${sqaureHeight}px `; //size related to p-table
  document.getElementById("square").style.width = `${sqaureHeight}px`; //
  document.getElementById("square").style.zIndex = `-100`; //to make this appear below everything(temp might change)
  document.getElementById("square").style.width = `${sqaureHeight}px`; //
  //document.getElementById("square").style.position = `absolute` ;                   //
  //document.getElementById("square").style.left = `${50}%` ;                       //
  //document.getElementById("square").style.right = `${50}%` ;       //tried to make it center with resp. to elementbox

  let i = 0, //this to put electrons
    shellNo = 0, //to put shells in specific size
    distanceChanger = 1, //so we need to calc no of shells
    durationChanger = 1, //this code would diff if
    delayChanger = 0; //eleconfig already known
  let noOfShells;
  noOfShells = 0;
  while (finalelectronicconfig[noOfShells] != 0 && noOfShells < 7) {
    noOfShells++;
  }

  spans.forEach((span) => {
    //for every span inside the sqaure it applies following things

    const finalRadius = sqaureHeight / 2; //final and initial radius depending on sqHeight
    const initialRadius = sqaureHeight / 20; //so atom isnt larger than square
    const distanceBetweenOrbit =
      (initialRadius + finalRadius) / (noOfShells + 1); //this is so that small and large
    console.log(finalRadius + " distbetorbit"); //elements look similar sized
    const divRadius = sqaureHeight / 50; //div is electron, may should change the name

    if (i < finalelectronicconfig[shellNo]) {
      // this is so that ele in one orbit have same radius
      i++;
      const Duration = Math.pow(durationChanger, 1.5) * 4000;
      const height = distanceChanger * distanceBetweenOrbit + initialRadius;
      const width = distanceChanger * distanceBetweenOrbit + initialRadius;

      delayChanger = delayChanger + Duration / finalelectronicconfig[shellNo];

      span.style.height = `${height}px`;
      span.style.width = `${width}px`;

      const Delay = delayChanger;

      span.style.animationDuration = `${Duration}ms`;

      span.style.animationDelay = `-${Delay}ms`;
      span.style.borderColor = `white`;
      span.style.borderRadius = `${50}%`;

      const childNode = document.createElement("div");

      childNode.style.height = `${divRadius}px`;
      childNode.style.width = `${divRadius}px`;

      const lengthOfColours = colorArray.length;
      const ColourIndex = Math.floor(Math.random() * lengthOfColours);
      const Colour = colorArray[ColourIndex];

      childNode.style.background = Colour;
      //childNode.style.boxShadow = `0 0 1px 1px ${Colour} `;

      span.appendChild(childNode);
    } else {
      i = 0;
      shellNo++;
      distanceChanger++;
      durationChanger++;
      if (i < finalelectronicconfig[shellNo]) {
        i++;
        const Duration = Math.pow(durationChanger, 1.5) * 4000;
        const height = distanceChanger * distanceBetweenOrbit + initialRadius;
        const width = distanceChanger * distanceBetweenOrbit + initialRadius;

        delayChanger = delayChanger + Duration / finalelectronicconfig[shellNo];

        span.style.height = `${height}px`;
        span.style.width = `${width}px`;

        const Delay = delayChanger;

        span.style.animationDuration = `${Duration}ms`;

        span.style.animationDelay = `-${Delay}ms`;
        span.style.borderColor = `white`;
        span.style.borderRadius = `${50}px`;

        const childNode = document.createElement("div");

        childNode.style.height = `${divRadius}px`;
        childNode.style.width = `${divRadius}px`;

        const lengthOfColours = colorArray.length;
        const ColourIndex = Math.floor(Math.random() * lengthOfColours);
        const Colour = colorArray[ColourIndex];

        childNode.style.background = Colour;
        //childNode.style.boxShadow = `0 0 1px 1px ${Colour} `;

        span.appendChild(childNode);
      }
    }
  });
}
/*This is for the animation happening outside the table*/


/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/*Atom Animation code */
var allAlignelements = document.getElementsByClassName("align");
console.log(allAlignelements.length + " allalitems");
for (let k = 0; k < allAlignelements.length; k++) {
  var sqDiv = document.createElement("div");
  sqDiv.className = "square";
  allAlignelements[k].appendChild(sqDiv);

  var nucleusDiv = document.createElement("div");
  nucleusDiv.className = "nucleus";
  sqDiv.appendChild(nucleusDiv);

  var colorArray = ["red", "orange"];
  const atomicNo = k + 1;
  var electroniconfigtemplate = [
    //instead of this i want to fetch this from json
    [1, 0], //since configuration has many exceptions
    [2, 0],
    [2, 1],
    [3, 0],
    [3, 1],
    [4, 0],
    [3, 2],
    [4, 1],
    [5, 0],
    [4, 2],
    [5, 1],
    [6, 0],
    [4, 3],
    [5, 2],
    [6, 1],
    [7, 0],
    [5, 3],
    [6, 2],
    [7, 1],
  ];

  let cnt = 0;
  let electronicconfig = [0, 0, 0, 0, 0, 0, 0];
  for (let k = 0; k < 19; k++) {
    let n = electroniconfigtemplate[k];
    let shell = n[0];
    let subShell = n[1];
    let electrons = 0;
    for (let m = -subShell; m < subShell + 1; m++) {
      for (let s = 0; s < 2; s++) {
        cnt++;
        electrons++;
        if (cnt == atomicNo) {
          break;
        }
      }
      if (cnt == atomicNo) {
        break;
      }
    }
    electronicconfig[shell - 1] = electronicconfig[shell - 1] + electrons; //if i get electronic config from
    if (cnt == atomicNo) {
      //json this code will be gone
      break;
    }
  }

  const finalelectronicconfig = electronicconfig;
  console.log(finalelectronicconfig + " eleconfig" + k);

  for (let i = 0; i < atomicNo; i++) {
    var span = document.createElement("span");
    span.className = "span" + `${k + 1}`;
    sqDiv.appendChild(span);
    console.log(" eleconfig" + i);
  }
  const spans = document.querySelectorAll(".span" + `${k+1}`);

  console.log(spans.length + " spans");
  console.log( ".span" + k);

  const elebox = document.getElementsByClassName("element-box");
  const sqDivHeight = elebox[0].clientHeight;
  console.log(sqDivHeight + " height of box");

  sqDiv.style.height = `${sqDivHeight}px`;
  sqDiv.style.width = `${sqDivHeight}px`;
  sqDiv.style.zIndex = `${-100}`;
  sqDiv.style.position = `relative`;
  sqDiv.style.left = `${0}%`;
  sqDiv.style.top = `${0}%`;

  console.log(spans[0] + " spans[0]");
  let eleInNthShell = 0; 
  shellNo = 0, //this to put electrons
    distanceChanger = 1, //so we need to calc no of shells
    durationChanger = 1, //this code would diff if
    delayChanger = 0; //eleconfig already known
  let noOfShells;
  noOfShells = 0;
  while (finalelectronicconfig[noOfShells] != 0 && noOfShells < 7) {
    noOfShells++;
  }
  console.log(noOfShells + " noshells");
  console.log(atomicNo + "atomicno");

  const iniRadius = sqDivHeight / 20;
  const finRadius = sqDivHeight / 2;
  const distBetweenOrbit = (iniRadius + finRadius)/(noOfShells+1);
  const eleRadius = sqDivHeight / 50;
  console.log(iniRadius+"iniRadius");
  console.log(finRadius+"finRadius");
  console.log(distBetweenOrbit+"disBetween orbit");
  for (let totalEle = 0; totalEle < atomicNo; totalEle++) {

    console.log(spans.length + " spans.len");
    console.log(spans + "spans[]" + totalEle);

    if (eleInNthShell < finalelectronicconfig[shellNo]) {
        console.log(eleInNthShell+"eleInNthShell");

        const duration = Math.pow(durationChanger,1.5) * 4000;
        const spanHeight = distanceChanger * distBetweenOrbit + iniRadius;
        const spanWidth = distanceChanger * distBetweenOrbit + iniRadius;

        console.log(duration+"duration");
        console.log(spanHeight+"span height");
        console.log(spanWidth+"span width");

        delayChanger = delayChanger + (duration /finalelectronicconfig[shellNo]);
        const delay = delayChanger
        spans[totalEle].style.height = `${spanHeight}px`;
        spans[totalEle].style.width = `${spanWidth}px`;
        spans[totalEle].animate([{transform: "rotate(0)"},{transform:"rotate(360deg)"},],Infinity);
        spans[totalEle].style.animationDuration = `${duration}px`;
        spans[totalEle].style.animationDelay = `${delay}px`;
        spans[totalEle].style.borderColor = `white`;
        spans[totalEle].style.borderRadius = `${50}px`;
        console.log(delayChanger+"delayChanger");

        const electronNode = document.createElement("div");
        const lengthOfColours = colorArray.length;
        const ColourIndex = Math.floor(Math.random() * lengthOfColours);
        const Colour = colorArray[ColourIndex];


        electronNode.style.height = `${eleRadius}px`;
        electronNode.style.width = `${eleRadius}px`;
        electronNode.style.background = Colour;

        spans[totalEle].appendChild(electronNode);

        eleInNthShell++;
    } else {
    eleInNthShell=0;
    shellNo++;
    totalEle--;
    durationChanger++;
    distanceChanger++;
    console.log(totalEle+"total ele");
    }
  }
}
/*Atom Animation code */