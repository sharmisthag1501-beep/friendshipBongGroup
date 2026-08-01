// ==========================================
// OUR TRAVEL DIARY
// ==========================================

// ------------------------------
// Smooth Scroll Buttons
// ------------------------------

const startJourney = document.getElementById("startJourney");

if(startJourney){

startJourney.addEventListener("click",()=>{

document.getElementById("letter").scrollIntoView({

behavior:"smooth"

});

});

}

const journeyBtn = document.getElementById("journeyBtn");

if(journeyBtn){

journeyBtn.addEventListener("click",()=>{

document.getElementById("journey").scrollIntoView({

behavior:"smooth"

});

});

}

// ------------------------------
// Scroll Reveal Animation
// ------------------------------

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll(

".hero-card,.letter-card,.memory,.quote,.friendship-card"

).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// ------------------------------
// Floating Travel Icons
// ------------------------------

const icons=[
"✈️",
"📍",
"🧳",
"📸",
"🌴",
"🌎",
"🎵",
"☀️"
];

function createIcon(){

const icon=document.createElement("div");

icon.className="floating-icon";

icon.innerHTML=icons[Math.floor(Math.random()*icons.length)];

icon.style.left=Math.random()*100+"vw";

icon.style.fontSize=(20+Math.random()*18)+"px";

icon.style.animationDuration=(8+Math.random()*5)+"s";

document.body.appendChild(icon);

setTimeout(()=>{

icon.remove();

},13000);

}

setInterval(createIcon,1200);

// ------------------------------
// Dynamic Styles
// ------------------------------

const style=document.createElement("style");

style.innerHTML=`

.floating-icon{

position:fixed;

bottom:-50px;

pointer-events:none;

z-index:999;

opacity:.65;

animation:travelFloat linear forwards;

}

@keyframes travelFloat{

0%{

transform:translateY(0) rotate(0deg);

opacity:0;

}

15%{

opacity:1;

}

100%{

transform:translateY(-120vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);

// ------------------------------
// Memory Card Hover Effect
// ------------------------------

document.querySelectorAll(".memory").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// ------------------------------
// Button Ripple Effect
// ------------------------------

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

ripple.className="ripple";

const size=Math.max(button.clientWidth,button.clientHeight);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.offsetX-size/2+"px";

ripple.style.top=e.offsetY-size/2+"px";

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

const rippleStyle=document.createElement("style");

rippleStyle.innerHTML=`

button{

position:relative;

overflow:hidden;

}

.ripple{

position:absolute;

border-radius:50%;

background:rgba(255,255,255,.5);

transform:scale(0);

animation:ripple .6s linear;

pointer-events:none;

}

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(rippleStyle);

// ------------------------------
// Gentle Parallax Effect
// ------------------------------

window.addEventListener("scroll",()=>{

const scrollY=window.scrollY;

document.body.style.backgroundPositionY=scrollY*0.2+"px";

});

// ------------------------------
// Welcome Message
// ------------------------------

console.log("🌍 Welcome to Our Travel Diary ❤️");
