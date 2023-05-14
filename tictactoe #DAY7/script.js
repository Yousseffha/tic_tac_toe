let btns = document.querySelectorAll("#btn");
let container = document.getElementById("container").children;
let n = 0;
let FirstBtn = document.getElementById("btn-1");
let playAgainBtn = document.getElementById("play-again");
let clearBtn = document.getElementById("clear")
let control = document.getElementById("control");
let xScore = document.getElementById("X-score");
let oScore = document.getElementById("O-score");

btns.forEach((e) => {
  e.onclick = function () {
    if (n === 0) {
      n++;
      e.textContent = "x";
    } else {
      n--;
      e.textContent = "o";
    }
    let FirstRwo =
      container[0].textContent +
      container[1].textContent +
      container[2].textContent;
    let SecondRow =
      container[3].textContent +
      container[4].textContent +
      container[5].textContent;
    let ThirdRow =
      container[6].textContent +
      container[7].textContent +
      container[8].textContent;
    let FirstColumn =
      container[0].textContent +
      container[3].textContent +
      container[6].textContent;
    let SecondColumn =
      container[1].textContent +
      container[4].textContent +
      container[7].textContent;
    let ThirdColumn =
      container[2].textContent +
      container[5].textContent +
      container[8].textContent;
    let FirstObliqueRow =
      container[0].textContent +
      container[4].textContent +
      container[8].textContent;
    let SecondObliqueRow =
      container[2].textContent +
      container[4].textContent +
      container[6].textContent;

    if ((FirstRwo === "xxx") | (FirstRwo === "ooo")) {
      e.classList.add("Horizontal");
    }
    if ((SecondRow === "xxx") | (SecondRow === "ooo")) {
      e.classList.add("Horizontal");
    }
    if ((ThirdRow === "xxx") | (ThirdRow === "ooo")) {
      e.classList.add("Horizontal");
    }
    if ((FirstColumn === "xxx") | (FirstColumn === "ooo")) {
      e.classList.add("vertical");
    }
    if ((SecondColumn === "xxx") | (SecondColumn === "ooo")) {
      e.classList.add("vertical");
    }
    if ((ThirdColumn === "xxx") | (ThirdColumn === "ooo")) {
      e.classList.add("vertical");
    }
    if ((FirstObliqueRow === "xxx") | (FirstObliqueRow === "ooo")) {
      e.classList.add("Oblique-left-row");
    }
    if ((SecondObliqueRow === "xxx") | (SecondObliqueRow === "ooo")) {
      e.classList.add("Oblique-right-row");
    }
    if (
      e.classList.contains("Horizontal") |
      e.classList.contains("vertical") |
      e.classList.contains("Oblique-left-row") |
      e.classList.contains("Oblique-right-row")
    ) {
      setTimeout(function () {
        control.style.display = "flex";
      }, 700);
    }
    if(e.classList.contains("Horizontal") && FirstRwo === "xxx" | SecondRow === "xxx" | ThirdRow === "xxx") {
      xScore.innerHTML = Number(xScore.innerHTML) + 1
    }
    if(e.classList.contains("vertical") && FirstColumn === "xxx" | SecondColumn === "xxx" | ThirdColumn === "xxx") {
      xScore.innerHTML = Number(xScore.innerHTML) + 1
    }
    if(e.classList.contains("Oblique-left-row") && FirstObliqueRow === "xxx") {
      xScore.innerHTML = Number(xScore.innerHTML) + 1
    }
    if(e.classList.contains("Oblique-right-row") && SecondObliqueRow === "xxx") {
      xScore.innerHTML = Number(xScore.innerHTML) + 1
    }
    if(e.classList.contains("Horizontal") && FirstRwo === "ooo" | SecondRow === "ooo" | ThirdRow === "ooo") {
      oScore.innerHTML = Number(oScore.innerHTML) + 1
    }
    if(e.classList.contains("vertical") && FirstColumn === "ooo" | SecondColumn === "ooo" | ThirdColumn === "ooo") {
      oScore.innerHTML = Number(oScore.innerHTML) + 1
    }
    if(e.classList.contains("Oblique-left-row") && FirstObliqueRow === "ooo") {
      oScore.innerHTML = Number(oScore.innerHTML) + 1
    }
    if(e.classList.contains("Oblique-right-row") && SecondObliqueRow === "ooo") {
      oScore.innerHTML = Number(oScore.innerHTML) + 1
    }
  };
});


playAgainBtn.onclick = function () {
  btns.forEach((e) => {
    e.textContent = "";
    e.classList.remove("Horizontal");
    e.classList.remove("vertical");
    e.classList.remove("Oblique-left-row");
    e.classList.remove("Oblique-right-row");
    n = 0;
  });
  control.style.display = "none";
};

clearBtn.onclick = function() {
  xScore.textContent = "0"
  oScore.textContent = "0"
  btns.forEach((e) => {
    e.textContent = "";
    e.classList.remove("Horizontal");
    e.classList.remove("vertical");
    e.classList.remove("Oblique-left-row");
    e.classList.remove("Oblique-right-row");
    n = 0;
  });
  control.style.display = "none";
}
