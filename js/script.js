function jarFunction() {
  var jarpopup = document.getElementById("jarpop");
  jarpopup.classList.toggle("showjar");
}
function botFunction() {
  var botpopup = document.getElementById("botpop");
  botpopup.classList.toggle("showbot");
}
function keyFunction() {
  var popup = document.getElementById("keypop");
  popup.classList.toggle("show");
}
function aliceFunction() {
  var alicepopup = document.getElementById("alicepop");
  alicepopup.classList.toggle("showalice");
}
function caterFunction() {
  var caterpopup = document.getElementById("caterpop");
  caterpopup.classList.toggle("showcater");
}
function aliceqFunction() {
  var alicequeenpopup = document.getElementById("aliceqpop");
  alicequeenpopup.classList.toggle("showaq");
}

function bowspinFunction() {
  teaparty.play("bow tie");
}

function hatFunction() {
  teaparty.play("mad hatter");
}

function teapotFunction() {
  teaparty.play("teapot");
}

function rose1Function() {
  bushone.play("rose1");
  setTimeout(function () {
    bushone.pause("rose1");
  }, 1010);
}
function rose2Function() {
  bushone.play("rose2");
  setTimeout(function () {
    bushone.pause("rose2");
  }, 1010);
}
function rose3Function() {
  bushone.play("rose3");
  setTimeout(function () {
    bushone.pause("rose3");
  }, 1010);
}

function rose4Function() {
  bushtwo.play("rose4");
  setTimeout(function () {
    bushtwo.pause("rose4");
  }, 1010);
}
function rose5Function() {
  bushtwo.play("rose5");
  setTimeout(function () {
    bushtwo.pause("rose5");
  }, 1010);
}
function rose6Function() {
  bushtwo.play("rose6");
  setTimeout(function () {
    bushtwo.pause("rose6");
  }, 1010);
}

function queenFunction() {

  queen.play("angry");
  setTimeout(function () {
    queen.pause("angry");
  }, 1010);
}


const selectLink = function (event) {
  console.log("clicked on", event.currentTarget);
  highlightLink(event.currentTarget);
}

const highlightLink = function (element) {
  for (let link of links) {
    link.classList.remove("selected");
  }
  element.classList.add("selected");
}

const checkSections = function (entries) {
  for (let entry of entries) {
    if (entry.intersectionRatio >= 0.5) {
      console.log("scrolled to", entry.target);
      let hash = "#" + entry.target.id;
      for (let link of links) {
        if ( link.hash === hash ) highlightLink( link );
      }
    }
  }
}
let links = document.querySelectorAll("nav .material-symbols-outlined ");
let observer = new IntersectionObserver(checkSections, { threshold: [0.5] });
let sections = document.querySelectorAll("section");

for (let link of links) {
  link.addEventListener("click", selectLink);
}
for (let section of sections) {
  observer.observe(section);
}
document.body.scrollIntoView();


// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
// });




// function submit(event) {
//   event.preventDefault();
//   alert("Thanks for your submission!");
// }