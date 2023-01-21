// DOM Components
const hero_texts = document.querySelector(".hero-texts");
const nav = document.querySelector("nav");
const tank = document.querySelector("#tank");
const missiles_launcher = document.querySelector("#missiles-launcher");
const box = document.querySelector(".box");
const bg = document.querySelector("#bg");
const plane = document.querySelector("#plane");
const tooltip = document.querySelector(".tooltip");
const figures = document.querySelectorAll(".figures");
const fg = document.querySelector("#fg");

// Paralex effect
fg.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth - e.pageX * 2) / 100;
  let y = (window.innerWidth - e.pageY * 2) / 100;
  fg.style.transform = `translate(${x}px, ${y}px)`;
  bg.style.transform = `translate(${y}px, ${x}px)`;
});

// GSAP Timelines
const tl1 = new gsap.timeline();
const tl2 = new gsap.timeline();
// translate image
tl1.fromTo(tank, 1, { x: "-100%" }, { x: "25vw", ease: Power2.easeInOut });
tl2.fromTo(
  missiles_launcher,
  1,
  { x: "100%" },
  { x: "-35vw", ease: Power2.easeInOut }
);

document.body.addEventListener("scroll", function () {
  var value = document.body.scrollTop;
  bg.style.top = value * 0.5 + "px";
  plane.style.left = value * 0.2 + "px";
});

// Scrollmagic

// Controller
const controller = new ScrollMagic.Controller();

// Scenes

// Hero-Texts-1
const scene_1 = new ScrollMagic.Scene({
  duration: 200,
  offset: -200,
  triggerElement: hero_texts,
  triggerHook: 0,
})
  // .addIndicators()
  .setPin(hero_texts)
  .addTo(controller);

// Hero-Texts-2
const scene_2 = new ScrollMagic.Scene({
  duration: document.height,
  offset: 100,
  triggerElement: hero_texts,
  triggerHook: 0,
})
  // .addIndicators()
  .setPin(hero_texts)
  .addTo(controller);

scene_1.on("progress", (e) => {
  hero_texts.children[0].childNodes.forEach((ch) => {
    ch.style = `font-size: ${Math.min(
      Math.min(10, (window.innerWidth / 10) * 0.06),
      Math.max((1 - e.progress) * 10, 2)
    )}rem`;
  });

  hero_texts.childNodes[3].style = `opacity: ${1 - e.progress}`;
  tooltip.children[0].style.opacity = `${1 - e.progress}`;
  // console.log();
});

scene_2.on("enter leave", (e) => {
  hero_texts.classList.toggle("disappear");
  nav.classList.toggle("appear");
});

// Tank-Motion
const scene_3 = new ScrollMagic.Scene({
  duration: 1000,
  offset: -900,
  triggerElement: tank,
  triggerHook: 0.6,
})
  // .addIndicators()
  .setTween(tl1)
  .addTo(controller);

// missiles_launcher-Motion
const scene_4 = new ScrollMagic.Scene({
  duration: 1000,
  offset: -600,
  triggerElement: missiles_launcher,
  triggerHook: 0.9,
})
  // .addIndicators()
  .setTween(tl2)
  .addTo(controller);

// count animation
const scene_5 = new ScrollMagic.Scene({
  duration: 5000,
  offset: 600,
  triggerElement: missiles_launcher,
  triggerHook: 0.9,
})
  // .addIndicators()
  // .setPin(figures)
  // .setTween(tl2)
  .addTo(controller);

scene_5.on("enter", (e) => {
  counter("number_1", 0, 700, 6000, 1, true);
  counter("number_2", 0, 30, 5000, 1, false);
  counter("number_3", 0, 10, 3000, 1, true);
});

function counter(id, start, end, duration, i, k) {
  let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? i : -i,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
      current += increment;
      obj.textContent = k === true ? `${current}k` : current;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
}
