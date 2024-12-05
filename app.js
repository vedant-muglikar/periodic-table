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
          box.style.background = "#DCDCDC";
          box.children[0].style.color = "black";
        }
        /*liquid*/
        if (element.boiling > temp && temp > element.melting) {
          box.style.background = "#4169E1";
        }
        /*solid*/
        if (element.melting > temp) {
          box.style.background = "#FF7F7F";
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

/*update the display and slider with temperature value*/g
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
/*youtuber code */
/*New code */

