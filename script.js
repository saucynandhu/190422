document.addEventListener("DOMContentLoaded", () => {
  const message = "I love you more with every passing day 💕";
  let i = 0;
  const typing = document.getElementById("loveMessage");

  // Typing effect for the love message
  function typeChar() {
    if (i < message.length) {
      typing.innerHTML += message.charAt(i);
      i++;
      setTimeout(typeChar, 100);
    }
  }
  typeChar();

  // Sakura Petal Animation+
  const canvas = document.getElementById("petals");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let petals = [];
  for (let i = 0; i < 40; i++) {
    petals.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 5 + 2,
      d: Math.random() * 2 + 1,
    });
  }

  function drawPetals() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255,192,203,0.8)";
    ctx.beginPath();
    for (let p of petals) {
      ctx.moveTo(p.x, p.y);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    updatePetals();
  }

  function updatePetals() {
    for (let p of petals) {
      p.y += p.d;
      if (p.y > canvas.height) {
        p.y = 0;
        p.x = Math.random() * canvas.width;
      }
    }
  }

  setInterval(drawPetals, 30);

  // Theme Toggle
  const toggle = document.getElementById("toggleTheme");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // Countdown Timer
  const targetDate = new Date("2025-04-19").getTime(); // Next anniversary on 19th April
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(
      "countdownTimer"
    ).textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
      document.getElementById("countdownTimer").textContent =
        "Happy Anniversary!";
    }
  }
  setInterval(updateCountdown, 1000);

  // Love Letter: Save and Display
  const loveLetterInput = document.getElementById("loveLetterInput");
  const saveButton = document.getElementById("saveLoveLetter");
  const deleteButton = document.getElementById("deleteLoveLetter");
  const savedLoveLetter = document.getElementById("savedLoveLetter");

  // Load the saved love letter from local storage
  const savedLetter = localStorage.getItem("loveLetter");
  if (savedLetter) {
    savedLoveLetter.textContent = savedLetter;
  }

  // Save the love letter to local storage and display it
  saveButton.addEventListener("click", () => {
    const loveLetter = loveLetterInput.value;
    if (loveLetter) {
      localStorage.setItem("loveLetter", loveLetter);
      savedLoveLetter.textContent = loveLetter;
      loveLetterInput.value = ""; // Clear the input field
    }
  });

  // Delete the love letter from local storage and remove it from the display
  deleteButton.addEventListener("click", () => {
    localStorage.removeItem("loveLetter");
    savedLoveLetter.textContent = "";
  });

  // Scroll Indicator Visibility
  const scrollIndicator = document.querySelector(".scroll-indicator");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      // Adjust this value as needed
      scrollIndicator.style.display = "none";
    } else {
      scrollIndicator.style.display = "block";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const carouselImages = document.querySelectorAll(".carousel img");
  let currentIndex = 0;

  function showImage(index) {
    // Hide all images
    carouselImages.forEach((img) => (img.style.display = "none"));
    // Show the current image
    carouselImages[index].style.display = "block";
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % carouselImages.length; // Loop back to the first image
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex =
      (currentIndex - 1 + carouselImages.length) % carouselImages.length; // Loop back to the last image
    showImage(currentIndex);
  }

  // Initial setup: show the first image
  showImage(currentIndex);

  // Event listeners for navigation buttons
  document.getElementById("nextBtn").addEventListener("click", nextImage);
  document.getElementById("prevBtn").addEventListener("click", prevImage);
});
