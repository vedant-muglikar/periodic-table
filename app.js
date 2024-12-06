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
    elementCards.forEach((box) => {
      console.log(box.children[0]);
      if (box.classList.contains(name)) {
        /*gass*/
        if (element.boiling < temp) {
          box.style.borderColor = "#DCDCDC";
          box.children[0].style.color = "black";
        }
        /*liquid*/
        if (element.boiling > temp && temp > element.melting) {
          box.style.borderColor = "#4169E1";
        }
        /*solid*/
        if (element.melting > temp) {
          box.style.borderColor = "#FF7F7F";
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
      element_name
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
    element_name
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
/*Colour of element updater*/

function colorOfElementUpdaterAlkaliMetal() {
  console.log("Updating Alkali Metals...");
  const allAlkaliMetals = document.querySelectorAll(".alkaliMetal");
  for (let i = 0; i < allAlkaliMetals.length; i++) {
    allAlkaliMetals[i].style.background = `rgb(35, 244, 255)`;
    //allAlkaliMetals[i].style.boxShadow = `0 0 1vh rgb(35, 244, 255)`;
  }
  console.log(allAlkaliMetals[0].style.background + " Alkali Metals updated.");
}

function colorOfElementUpdaterAlkalineEarthMetal() {
  console.log("Updating Alkaline Earth Metals...");
  const allAlkalineEarthMetals = document.querySelectorAll(
    ".alkalineEarthMetal"
  );
  for (let i = 0; i < allAlkalineEarthMetals.length; i++) {
    allAlkalineEarthMetals[i].style.background = `rgb(48, 193, 255)`;
    //allAlkalineEarthMetals[i].style.boxShadow = `0 0 1vh rgb(48, 193, 255)`;
  }
  console.log(
    allAlkalineEarthMetals[0].style.background +
      " Alkaline Earth Metals updated."
  );
}

function colorOfElementUpdaterTransitionElement() {
  console.log("Updating Transition Elements...");
  const allTransitionElements = document.querySelectorAll(".transitionElement");
  for (let i = 0; i < allTransitionElements.length; i++) {
    allTransitionElements[i].style.background = `rgb(255, 228, 77)`;
    //allTransitionElements[i].style.boxShadow = `0 0 1vh rgb(255, 228, 77)`;
  }
  console.log(
    allTransitionElements[0].style.background + " Transition Elements updated."
  );
}

function colorOfElementUpdaterPostTransitionElement() {
  console.log("Updating Post-Transition Elements...");
  const allPostTransitionElements = document.querySelectorAll(
    ".postTransitionElement"
  );
  for (let i = 0; i < allPostTransitionElements.length; i++) {
    allPostTransitionElements[i].style.background = `rgb(255, 170, 0)`;
    //allPostTransitionElements[i].style.boxShadow = `0 0 1vh rgb(255, 170, 0)`;
  }
  console.log(
    allPostTransitionElements[0].style.background +
      " Post-Transition Elements updated."
  );
}

function colorOfElementUpdaterMetalloid() {
  console.log("Updating Metalloids...");
  const allMetalloids = document.querySelectorAll(".metalloid");
  for (let i = 0; i < allMetalloids.length; i++) {
    allMetalloids[i].style.background = `rgb(183, 198, 196)`;
    //allMetalloids[i].style.boxShadow = `0 0 1vh rgb(183, 198, 196)`;
  }
  console.log(allMetalloids[0].style.background + " Metalloids updated.");
}

function colorOfElementUpdaterNonmetal() {
  console.log("hello");
  const allNonMetals = document.querySelectorAll(".nonMetal");
  for (let i = 0; i < allNonMetals.length; i++) {
    allNonMetals[i].style.background = `rgb(255, 69, 112)`;
    //allNonMetals[i].style.boxShadow = `0 0 1vh rgb(255, 69, 112)`;
  }
  console.log(allNonMetals[0].style.background + "yoo");
}

function colorOfElementUpdaterNobleGas() {
  console.log("Updating Noble Gases...");
  const allNobleGases = document.querySelectorAll(".nobleGas");
  for (let i = 0; i < allNobleGases.length; i++) {
    allNobleGases[i].style.background = `rgb(183, 48, 255)`;
    //allNobleGases[i].style.boxShadow = `0 0 1vh rgb(183, 48, 255)`;
  }
  //console.log(allNobleGases[0].style.background + " Noble Gases updated.");
}

function colorOfElementUpdaterLanthanoid() {
  console.log("Updating Lanthanoids...");
  const allLanthanoids = document.querySelectorAll(".lanthanoid");
  for (let i = 0; i < allLanthanoids.length; i++) {
    allLanthanoids[i].style.background = `rgb(180, 255, 41)`;
    //allLanthanoids[i].style.boxShadow = `0 0 1vh rgb(203, 255, 46)`;
  }
  console.log(allLanthanoids[0].style.background + " Lanthanoids updated.");
}

function colorOfElementUpdaterActinoid() {
  console.log("Updating Actinoids...");
  const allActinoids = document.querySelectorAll(".actinoid");
  for (let i = 0; i < allActinoids.length; i++) {
    allActinoids[i].style.background = `rgb(0, 255, 115)`;
    //allActinoids[i].style.boxShadow = `0 0 1vh rgb(0, 255, 115)`;
  }
  console.log(allActinoids[0].style.background + " Actinoids updated.");
}


function colorOfAllElementUpdate(){
  colorOfElementUpdaterAlkaliMetal();
  colorOfElementUpdaterAlkalineEarthMetal();
  colorOfElementUpdaterTransitionElement();
  colorOfElementUpdaterPostTransitionElement();
  colorOfElementUpdaterMetalloid();
  colorOfElementUpdaterNonmetal();
  colorOfElementUpdaterNobleGas();
  colorOfElementUpdaterLanthanoid();
  colorOfElementUpdaterActinoid();
}
/*Colour of element updater*/
