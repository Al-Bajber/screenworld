//index header carousel
const heading = document.getElementById("heading")
const talks = document.getElementById("talks")
const click = document.getElementById("click")
const buttons = document.getElementsByClassName("clicks");
const image = document.getElementById("carousel");

const slides = [
  {
    title: "Vision in motion",
    text: "ScreenWorld transforms ideas into impactful advertising. Driven by innovation and storytelling, we create dynamic experiences that engage and inspire.",
    button: "Learn more about us",
    bg: "../images/slideshow/two-partners.jpeg",
  },
  {
    title: "Strategic Ads",
    text: "ScreenWorld crafts high-impact campaigns, blending innovation with precision to connect brands with their audience.",
    button: "Explore our services",
    bg: "../images/slideshow/team-meeting-renewable-energy-project.jpeg",
  },
  {
    title: "Let's connect",
    text: "Reach out to ScreenWorld for innovative and impactful advertising solutions tailored to elevate your brand’s visibility and engagement.",
    button: "Get in touch",
    bg: "../images/slideshow/medium-shot-business-women-high-five.jpeg",
  }
];

let currentIndex = 0;

function updateCarousel(index) {
  heading.innerText = slides[index].title;
  talks.innerText = slides[index].text;
  click.innerText = slides[index].button;
  image.style.background = `url(${slides[index].bg})`;
  image.style.backgroundSize = "cover";

  // Update button states
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.background = i === index ? "#fff" : "transparent";
  }

  currentIndex = index;
}

// Attach click events
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    clearInterval(autoScroll); // pause auto on manual click
    updateCarousel(i);
    autoScroll = setInterval(nextSlide, 5000); // restart auto
  });
}

// Auto-scroll every 5s
function nextSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  updateCarousel(nextIndex);
}

let autoScroll = setInterval(nextSlide, 5000);

// Initialize first slide
updateCarousel(0);


