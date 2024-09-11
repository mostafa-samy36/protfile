const bur = document.getElementById("bur");
const che = document.getElementById("che");
const mobdis = document.getElementById("mobdis");

bur.addEventListener("click", function () {
  if (mobdis.style.opacity === "1") {
    mobdis.style.opacity = "0";
    mobdis.style.width = "0%";
    mobdis.style.height = "0%";
    mobdis.style.transition = "0.6s";
  } else {
    mobdis.style.opacity = "1";
    mobdis.style.width = "200%";
    mobdis.style.height = "120%";
    mobdis.style.transition = "0.6s";
  }
});

const ahmob = document.getElementById("ahmob");
const abomob = document.getElementById("abomob");
const awmob = document.getElementById("awmob");
const asmob = document.getElementById("asmob");
const acmob = document.getElementById("acmob");

const dliho = document.getElementById("dliho");
const dliab = document.getElementById("dliab");
const dliwo = document.getElementById("dliwo");
const dlise = document.getElementById("dlise");
const dlico = document.getElementById("dlico");

ahmob.addEventListener("click", function () {
  ahmob.style.color = "#56AD82";
  abomob.style.color = "#45505b";
  awmob.style.color = "#45505b";
  asmob.style.color = "#45505b";
  acmob.style.color = "#45505b";
  ahmob.style.transition = "0.5s ease";
  dliho.style.background = "#56AD82";
  dliho.style.transformOrigin = "bottom left";
  dliho.style.transform = "scaleX(1)";

  mobdis.style.opacity = "0";
  mobdis.style.width = "0%";
  mobdis.style.height = "0%";
  mobdis.style.transition = "0.6s";
  mobdis.style.transitionDelay = "0.5s";
  che.checked = false;

  dliab.style.background = "#45505b";
  dliab.style.transformOrigin = "bottom left";
  dliab.style.transform = "scaleX(0)";

  dliwo.style.background = "#45505b";
  dliwo.style.transformOrigin = "bottom left";
  dliwo.style.transform = "scaleX(0)";

  dlise.style.background = "#45505b";
  dlise.style.transformOrigin = "bottom left";
  dlise.style.transform = "scaleX(0)";

  dlico.style.background = "#45505b";
  dlico.style.transformOrigin = "bottom left";
  dlico.style.transform = "scaleX(0)";

  document.body.style.overflow = "scroll";
});

abomob.addEventListener("click", function () {
  ahmob.style.color = "#45505b";
  abomob.style.color = "#56AD82";
  awmob.style.color = "#45505b";
  asmob.style.color = "#45505b";
  acmob.style.color = "#45505b";
  abomob.style.transition = "0.5s ease";

  mobdis.style.opacity = "0";
  mobdis.style.width = "0%";
  mobdis.style.height = "0%";
  mobdis.style.transition = "0.6s";
  mobdis.style.transitionDelay = "0.5s";
  che.checked = false;

  dliho.style.background = "#45505b";
  dliho.style.transformOrigin = "bottom left";
  dliho.style.transform = "scaleX(0)";

  dliab.style.background = "#56AD82";
  dliab.style.transformOrigin = "bottom left";
  dliab.style.transform = "scaleX(1)";

  dliwo.style.background = "#45505b";
  dliwo.style.transformOrigin = "bottom left";
  dliwo.style.transform = "scaleX(0)";

  dlise.style.background = "#45505b";
  dlise.style.transformOrigin = "bottom left";
  dlise.style.transform = "scaleX(0)";

  dlico.style.background = "#45505b";
  dlico.style.transformOrigin = "bottom left";
  dlico.style.transform = "scaleX(0)";

  document.body.style.overflow = "scroll";
});

awmob.addEventListener("click", function () {
  ahmob.style.color = "#45505b";
  abomob.style.color = "#45505b";
  awmob.style.color = "#56AD82";
  asmob.style.color = "#45505b";
  acmob.style.color = "#45505b";
  awmob.style.transition = "0.5s ease";

  mobdis.style.opacity = "0";
  mobdis.style.width = "0%";
  mobdis.style.height = "0%";
  mobdis.style.transition = "0.6s";
  mobdis.style.transitionDelay = "0.5s";
  che.checked = false;

  dliho.style.background = "#45505b";
  dliho.style.transformOrigin = "bottom left";
  dliho.style.transform = "scaleX(0)";

  dliab.style.background = "#45505b";
  dliab.style.transformOrigin = "bottom left";
  dliab.style.transform = "scaleX(0)";

  dliwo.style.background = "#56AD82";
  dliwo.style.transformOrigin = "bottom left";
  dliwo.style.transform = "scaleX(1)";

  dlise.style.background = "#45505b";
  dlise.style.transformOrigin = "bottom left";
  dlise.style.transform = "scaleX(0)";

  dlico.style.background = "#45505b";
  dlico.style.transformOrigin = "bottom left";
  dlico.style.transform = "scaleX(0)";

  document.body.style.overflow = "scroll";
});

asmob.addEventListener("click", function () {
  ahmob.style.color = "#45505b";
  abomob.style.color = "#45505b";
  awmob.style.color = "#45505b";
  asmob.style.color = "#56AD82";
  acmob.style.color = "#45505b";
  asmob.style.transition = "0.5s ease";

  mobdis.style.opacity = "0";
  mobdis.style.width = "0%";
  mobdis.style.height = "0%";
  mobdis.style.transition = "0.6s";
  mobdis.style.transitionDelay = "0.5s";
  che.checked = false;

  dliho.style.background = "#45505b";
  dliho.style.transformOrigin = "bottom left";
  dliho.style.transform = "scaleX(0)";

  dliab.style.background = "#45505b";
  dliab.style.transformOrigin = "bottom left";
  dliab.style.transform = "scaleX(0)";

  dliwo.style.background = "#45505b";
  dliwo.style.transformOrigin = "bottom left";
  dliwo.style.transform = "scaleX(0)";

  dlise.style.background = "#56AD82";
  dlise.style.transformOrigin = "bottom left";
  dlise.style.transform = "scaleX(1)";

  dlico.style.background = "#45505b";
  dlico.style.transformOrigin = "bottom left";
  dlico.style.transform = "scaleX(0)";

  document.body.style.overflow = "scroll";
});

acmob.addEventListener("click", function () {
  ahmob.style.color = "#45505b";
  abomob.style.color = "#45505b";
  awmob.style.color = "#45505b";
  asmob.style.color = "#45505b";
  acmob.style.color = "#56AD82";
  acmob.style.transition = "0.5s ease";

  mobdis.style.opacity = "0";
  mobdis.style.width = "0%";
  mobdis.style.height = "0%";
  mobdis.style.transition = "0.6s";
  mobdis.style.transitionDelay = "0.5s";
  che.checked = false;

  dliho.style.background = "#45505b";
  dliho.style.transformOrigin = "bottom left";
  dliho.style.transform = "scaleX(0)";

  dliab.style.background = "#45505b";
  dliab.style.transformOrigin = "bottom left";
  dliab.style.transform = "scaleX(0)";

  dliwo.style.background = "#45505b";
  dliwo.style.transformOrigin = "bottom left";
  dliwo.style.transform = "scaleX(0)";

  dlise.style.background = "#45505b";
  dlise.style.transformOrigin = "bottom left";
  dlise.style.transform = "scaleX(0)";

  dlico.style.background = "#56AD82";
  dlico.style.transformOrigin = "bottom left";
  dlico.style.transform = "scaleX(1)";

  document.body.style.overflow = "scroll";
});

bur.addEventListener("click", function () {
  if (document.body.style.overflow === "hidden") {
    document.body.style.overflow = "scroll";
  } else {
    document.body.style.overflow = "hidden";
  }
});
