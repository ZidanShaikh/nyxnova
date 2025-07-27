const unlockDate = new Date("2025-08-07");
const today = new Date();

if (today >= unlockDate) {
  window.location.href = "home.html";
}
