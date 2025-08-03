const now = new Date();

// Convert current time to IST
const istOffset = 5.5 * 60; // IST is UTC+5:30 in minutes
const utc = now.getTime() + now.getTimezoneOffset() * 60000;
const istNow = new Date(utc + istOffset * 60000);

// Target unlock time: 12:00 AM IST, August 7, 2025
const unlockIST = new Date(Date.UTC(2025, 7, 6, 18, 30)); // 18:30 UTC == 00:00 IST

if (istNow >= unlockIST) {
  window.location.href = "https://nyxnova.netlify.app/home.html";
}
