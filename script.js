
  window.watsonAssistantChatOptions = {
    integrationID: "dbc5efd6-7930-44f3-a666-5c922e7af412", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "5ce544a6-f5fe-4683-b19b-6e4bf839a15a", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });


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
  
