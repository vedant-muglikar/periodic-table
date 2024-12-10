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
const tempValue = document.querySelector(".temp-value-kelvin");
/*glow effect metals */
const alkaliMetals = document.querySelectorAll(".alkaliMetal");
const alkaliEarthMetals = document.querySelectorAll(".alkalineEarthMetal");
const trans = document.querySelectorAll(".transitionElement");
const postTrans = document.querySelectorAll(".postTransitionElement");
const metalloids = document.querySelectorAll(".metalloid");
const nonMetalloids = document.querySelectorAll(".nonMetal");
const lanthanoids = document.querySelectorAll(".lanthanoid");
const actinoids = document.querySelectorAll(".actinoid");
const nobleGas = document.querySelectorAll(".nobleGas");
/*fillter buttons */
const alkaliMetalBtn = document.querySelector(".alkaliMetals");
const alkaliEarthMetalsBtn = document.querySelector(".alkalineEarthMetals");
const transBtn = document.querySelector(".transitionElements");
const postTransBtn = document.querySelector(".postTransitionElements");
const metalloidsBtn = document.querySelector(".metalloids");
const nonMetalloidsBtn = document.querySelector(".nonMetals");
const lanthanoidsBtn = document.querySelector(".lanthanoids");
const actinoidsBtn = document.querySelector(".actinoids");
const nobleGasBtn = document.querySelector(".nobleGases");

/*info page elements */
const intro = document.querySelector(".intro-p");
const infoLink = document.querySelector(".info-link");
const prop = document.querySelector(".prop");
const application = document.querySelector(".app-p");
const eleImgInfo = document.querySelector(".ele-img-info");
const eleNoInfo = document.querySelector(".ele-no-info");
const eleMassInfo = document.querySelector(".ele-mass-info");
const eleConfigInfo = document.querySelector(".ele-e-config-info");
const eleDensityInfo = document.querySelector(".ele-density-info");

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
  element_name,
  intro,
  properties,
  application,
  infoImg,
  infoAtNo,
  infoAtMass,
  infoEConfig,
  infoDensity
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
      intro.innerHTML = e.intro;
      properties.innerHTML = e.properties;
      application.innerHTML = e.application;
      infoImg.src = e.img;
      infoAtNo.innerText = e.atNo;
      infoAtMass.innerText = e.atMass;
      infoEConfig.innerHTML = e.eConfig;
      infoDensity.innerText = e.density;
    }
  });
}

/*temp value update*/
function tempUpdate(temp) {
  slider.value = temp;
  tempValue.value = temp;
}

/*Glowing effect */

function amglowUpdate() {
  alkaliMetals.forEach((ele) => {
    ele.classList.toggle("amglow");
  });
}
function aemglowUpdate() {
  alkaliEarthMetals.forEach((ele) => {
    ele.classList.toggle("aemglow");
  });
}
function teglowUpdate() {
  trans.forEach((ele) => {
    ele.classList.toggle("teglow");
  });
}
function pteglowUpdate() {
  postTrans.forEach((ele) => {
    ele.classList.toggle("pteglow");
  });
}
function meglowUpdate() {
  metalloids.forEach((ele) => {
    ele.classList.toggle("mglow");
  });
}
function nmglowUpdate() {
  nonMetalloids.forEach((ele) => {
    ele.classList.toggle("nmglow");
  });
}
function ngglowUpdate() {
  nobleGas.forEach((ele) => {
    ele.classList.toggle("ngglow");
  });
}
function laglowUpdate() {
  lanthanoids.forEach((ele) => {
    ele.classList.toggle("laglow");
  });
}
function acglowUpdate() {
  actinoids.forEach((ele) => {
    ele.classList.toggle("acglow");
  });
}

/*updating the color of elements */
function colorUpdate(temp) {
  elements.forEach((element) => {
    const name = element.name;
    elementCards.forEach((box) => {
      console.log(box.children[0]);
      if (box.classList.contains(name)) {
        /*gass*/
        if (element.boiling < temp) {
          box.style.borderColor = "#DCDCDC";
        }
        /*liquid*/
        if (element.boiling > temp && temp > element.melting) {
          box.style.borderColor = "#4169E1";
        }
        /*solid*/
        if (element.melting > temp) {
          box.style.borderColor = "rgb(229, 5, 5)";
        }
      }
    });
  });
}

/*info link syncing */
infoLink.addEventListener("click", (e) => {
  popupContainer.classList.remove("active");
  popup.classList.remove("active");
});

/*working of popup */
closeBtn.addEventListener("click", () => {
  popupContainer.classList.remove("active");
  popup.classList.remove("active");
});

elementCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    let element_name = e.target.children[1].innerText;
    console.log(element_name);
    popupUpdate(
      eleImg,
      eleName,
      eleNo,
      eleMass,
      eleConfig,
      eleDensity,
      eleCrust,
      eleUni,
      element_name,
      intro,
      prop,
      application,
      eleImgInfo,
      eleNoInfo,
      eleMassInfo,
      eleConfigInfo,
      eleDensityInfo
    );
    popupContainer.classList.add("active");
    popup.classList.add("active");
  });
});

/*update the display and slider with temperature value*/
slider.addEventListener("input", (e) => {
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
        intro: element.intro,
        properties: element.properties,
        application: element.application,
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
     console.log(availablekeywords);


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
  }
  display(result);

  if (!result.length) {
    resultBox.innerHTML = "";
  }
};

function display(result) {
  let content = result.map((list) => {
    return "<li onClick=selectInput(this)>" + list + "</li>";
  });

  resultBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectInput(list) {
  let element_name = list.innerHTML;
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
    element_name,
    intro,
    prop,
    application,
    eleImgInfo,
    eleNoInfo,
    eleMassInfo,
    eleConfigInfo,
    eleDensityInfo
  );

  popupContainer.classList.add("active");
  popup.classList.add("active");
}
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/*Test code*/
let allElectronicConfig = [];
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    allElectronicConfig = data.map((element) => element.eleConfig);
    console.log(allElectronicConfig);

    const allSq = document.querySelectorAll(".element-box");

for (let i = 0; i < allSq.length; i++) {
  const windowHeight = window.innerHeight;



  var electronicConfig = allElectronicConfig[i];
  
  let cnt =0;
  for(let i=0; i<electronicConfig.length;i++){
    cnt=cnt+electronicConfig[i];
  }
  const atomicNo = cnt;

  const noOfshells = electronicConfig.length;

  const electronDiam = (windowHeight / 100 )* 0.3;
  const iniDiam = 0.08 * allSq[i].clientHeight;
  const finDiam = 0.6 * allSq[i].clientHeight;
  const distanceBetweenOribt = (iniDiam + finDiam) / (noOfshells + 1);
  var orbitalDiam = iniDiam + distanceBetweenOribt;

  let r,g,b,nR,nG,nB;
  r=0;
  g=0;
  b=0;
  nR=Math.max(r,g,b)+Math.min(r,g,b)-r
  nG=Math.max(r,g,b)+Math.min(r,g,b)-g
  nB=Math.max(r,g,b)+Math.min(r,g,b)-b
  console.log(nR+"r"+nG+"g"+nB+"b");



  for (let j = 0; j < atomicNo; j++) {
    //Creating box to contain electrons and creating the electrons
    var eleContainer = document.createElement("span");
    allSq[i].appendChild(eleContainer);

    eleContainer.className = "eleContainer";
    var electron = document.createElement("div");

    eleContainer.appendChild(electron);
    eleContainer.style.zIndex = "0";

    //styling
    electron.style.background = `rgb(${nR},${nG},${nB})`;
    electron.style.height = `${(100 / windowHeight) * electronDiam}vh`;
    electron.style.width = `${(100 / windowHeight) * electronDiam}vh`;
    electron.style.borderRadius = "50%";
    electron.style.zIndex = "-3";
  }

  const allEleContainer = allSq[i].querySelectorAll(".eleContainer"); //collecting all electrons boxes

  for (let shellNo = 0, l = 0; shellNo < noOfshells; shellNo++) {
    for (let g = 0; g < electronicConfig[shellNo]; g++, l++) {
      //giving elecrons different radius in different shells
      allEleContainer[l].style.height = `${
        (100 / windowHeight) * orbitalDiam
      }vh`;
      allEleContainer[l].style.width = `${
        (100 / windowHeight) * orbitalDiam
      }vh`;
    }
    orbitalDiam = orbitalDiam + distanceBetweenOribt;
  }

  for (let k = 0, y = 0, duration = 10000, shellNo = 0; k < atomicNo; k++) {
    //duration and delay to make electrons spin nicely
    for (let f = 0; f < electronicConfig[shellNo]; f++) {
      var delay = f * (duration / electronicConfig[shellNo]);
      allEleContainer[y++].animate(
        [{ transform: "rotate(0)" }, { transform: "rotate(360deg)" }],
        {
          duration: duration,
          delay: -delay,
          iterations: Infinity,
        }
      );
    }
    duration = duration + 10000;
    shellNo++;
  }
}

  });
/* */
/*Test code*/
