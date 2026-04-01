const track = document.getElementById("track");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click", () => {
    track.scrollBy({
        left: 990,
        behavior: "smooth"
    });
});

prev.addEventListener("click", () => {
    track.scrollBy({
        left: -990,
        behavior: "smooth"
    });
});

const track1 = document.getElementById("track1");
const next1 = document.getElementById("next1");
const prev1 = document.getElementById("prev1");

next1.addEventListener("click", () => {
    track1.scrollBy({
        left: 990,
        behavior: "smooth"
    });
});

prev1.addEventListener("click", () => {
    track1.scrollBy({
        left: -990,
        behavior: "smooth"
    });
});

const track3 = document.getElementById("track3");
const slides3 = document.querySelectorAll(".slide_");
const events3 = document.querySelectorAll(".event_");

const next3 = document.getElementById("next3");
const prev3 = document.getElementById("prev3");

let currentIndex1 = 0;
const slideWidth1 = 600;

function updateSlider1() {

    track3.style.transform = `translateX(-${currentIndex1 * slideWidth1}px)`;

    events3.forEach(e => e.classList.remove("active"));
    events3[currentIndex1].classList.add("active");
}

events3.forEach((event, index) => {
    event.addEventListener("click", () => {
        currentIndex1 = index;
        updateSlider1();
    });
});

next3.addEventListener("click", () => {
    if (currentIndex1 < slides3.length - 1) {
        currentIndex1++;
        updateSlider1();
    }
});

prev3.addEventListener("click", () => {
    if (currentIndex1 > 0) {
        currentIndex1--;
        updateSlider1();
    }
});

const track2 = document.getElementById("track2");
const years = document.querySelectorAll(".year");
const slides = document.querySelectorAll(".slide");

const next2 = document.getElementById("next2");
const prev2 = document.getElementById("prev2");

let currentIndex = 0;
const slideWidth = 900;

function updateSlider() {
    track2.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    years.forEach(y => y.classList.remove("active"));
    years[currentIndex].classList.add("active");
}

years.forEach((year, index) => {
    year.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
    });
});

next2.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

prev2.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});


