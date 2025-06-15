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
    title: "Strategic Advertising",
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


//FAQ's Handling
document.querySelectorAll('.faq-item button').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.closest('.faq-item').querySelector('.faq-answer');
    const arrow = button.closest('.faq-item').querySelector('img')
    if (!answer) return;
    if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
      answer.style.maxHeight = "0px";
      arrow.style.transform = "rotate(0deg)"
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      arrow.style.transform = "rotate(180deg)"
    }
  });
});


//Geting started corousel
const navs = document.getElementsByClassName("navs");
const img = document.querySelector("#container img");
const p = document.querySelector("#content p");
const h3 = document.querySelector("#content h3")
for (let i = 0; i < navs.length; i++) {
  navs[i].addEventListener("click", function (e) {
    if (i == 1) {
      img.src = "../images/started/retail-shop-owner-mask-social-distancing-shopping.jpg"
      p.innerText = "Life at ScreenWorld is dynamic, creative, and driven by innovation. Our team collaborates to craft impactful advertising solutions, turning ideas into visually compelling experiences that captivate audiences. 💡"
      h3.innerHTML = "Life at <span>work</span>"
      navs[0].classList.remove("active")
      navs[2].classList.remove("active")
      navs[1].classList.add("active");
    } else if (i == 2) {
      img.src = "../images/started/cody-lannom-G95AReIh_Ko-unsplash.jpeg"
      p.innerText = "At ScreenWorld, innovation meets execution. Every project begins with a vision—crafted through design expertise, refined with technical precision, and brought to life with strategic planning 🎯"
      h3.innerHTML = "What can <span>help you?</span>"
      navs[0].classList.remove("active")
      navs[1].classList.remove("active")
      navs[2].classList.add("active");
    } else if(i == 0) {
      h3.innerHTML = "Good <span>design</span> ideas for <span>your</span> brand"
      p.innerText = "At ScreenWorld, we elevate your brand with innovative advertising solutions. From strategic outdoor placements to dynamic digital campaigns, we ensure your message reaches the right audience, making a lasting impact. Let’s bring your brand to life! 🚀"
      img.src = "../images/started/pim-chu-z6NZ76_UTDI-unsplash.jpeg";
      navs[1].classList.remove("active")
      navs[2].classList.remove("active")
      navs[0].classList.add("active");
    }
  })
}

/* //Navbar animation
const navbar = document.querySelector("nav");
let lastscroll = 0;
window.addEventListener("scroll", () => {
  let currentscroll = window.scrollY
  if(currentscroll > lastscroll) {
    navbar.classList.add("hide")
  } else {
    navbar.classList.remove("hide")
  }
  lastscroll = currentscroll;
}) */


//team popup
const popupfade = document.getElementById("popup-fade")
const popups = document.getElementsByClassName("popup")
function popup(name) {
  popupfade.style.display = "flex"
  document.body.style.overflow = "hidden"
  setTimeout(() => {
    if(name == "maqbul") {
      popups[0].classList.add("show")
    } else if(name=="alwiya") {
      popups[1].classList.add("show")
    } else if (name == "adnan") {
      popups[2].classList.add("show")
    }
  }, 10)
}
function popdown() {
  popupfade.style.display = "none"
  document.body.style.overflow ="auto"
  for (let i = 0; i < popups.length; i++) {
    popups[i].classList.remove("show")
  }
}

const hamburger = document.getElementsByClassName("hamburger")[0];
const sidebar = document.querySelector("aside");
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("active");
  sidebar.classList.toggle("active")
})

// Testimonials scrolling 
const testimonial = document.querySelectorAll(".testimonial")
const prevButton = document.querySelector(".left")
const nextButton = document.querySelector(".right")
const uls = document.querySelectorAll("#testimonials ul li")
let index = 0
const testimonialWidth = testimonial[2].offsetWidth;
function updateSlide() {
  for (let i = 0; i < testimonial.length; i++) {
    testimonial[i].style.transform = `translateX(${-index * testimonialWidth}px)`
  }
  uls.forEach(li => li.classList.remove("active"));
  uls[index].classList.add("active")
}
nextButton.addEventListener("click", () => {
  if(index < testimonial.length - 1) {
    index++;
    updateSlide();
  }
})
prevButton.addEventListener("click", () => {
  if (index > 0) {
    index--
    updateSlide();
  }
})


