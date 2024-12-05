// Countdown Timer
const countdown = () => {
    const launchDate = new Date("2024-12-31T00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = launchDate - now;
  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  
    if (timeLeft <= 0) {
      clearInterval(timer);
      document.querySelector("main").innerHTML = "<h2>We're Live! 🎉</h2>";
    }
  };
  
  // Update countdown every second
  const timer = setInterval(countdown, 1000);
  countdown();
  