const texts = [
  "Information Technology Student",
  "Web Developer",
  "Problem Solver",
  "Tech Enthusiast",
  "Future Software Engineer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      count++;
      index = 0;
      type();
    }, 1500);
  } else {
    setTimeout(type, 100);
  }
})();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(
  ".section, .glass-card, .skill-box, .service-card, .project-card"
).forEach((el)=>{
  el.classList.add("hidden");
  observer.observe(el);
});

window.addEventListener("scroll",()=>{
  const header=document.querySelector("header");

  if(window.scrollY>50){
    header.style.boxShadow="0 5px 25px rgba(0,0,0,.4)";
  }else{
    header.style.boxShadow="none";
  }
});