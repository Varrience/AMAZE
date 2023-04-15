// Scales the current project to the full screen without streching
const element = document.getElementsByClassName("web")[0];
//const styleTransform = element.style.transform;
const aspect = Math.min(window.innerWidth, window.innerHeight);
const scale = aspect / 400;
element.style["transform"] = `translateX(-50%) scale(${scale})`;
element.style["transfrom-origin"] = `top center`;
