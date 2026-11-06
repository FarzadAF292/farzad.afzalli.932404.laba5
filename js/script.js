// DOM ELEMENTS
// Find buttons by ID
const addIdeaButton = document.getElementById("add-idea-btn");
const deleteLastButton = document.getElementById("delete-last-btn");
const toggleIdeasButton = document.getElementById("toggle-ideas-btn");
const themeToggleButton = document.getElementById("theme-toggle-btn");

// Find the startup ideas container
const ideasContainer = document.querySelector("#ideas-container");

// Find all current startup cards
const ideaCards = document.querySelectorAll(".startup-card");

// Check that required elements exist
if (!addIdeaButton) {
  console.error("Element not found: add-idea-btn");
}

if (!deleteLastButton) {
  console.error("Element not found: delete-last-btn");
}

if (!toggleIdeasButton) {
  console.error("Element not found: toggle-ideas-btn");
}

if (!themeToggleButton) {
  console.error("Element not found: theme-toggle-btn");
}

if (!ideasContainer) {
  console.error("Element not found: #ideas-container");
}

console.log("Startup cards found:", ideaCards.length);

// Daily revenue values in rubles
const dailyRevenue = [3200, 12500, 7800, 15000, 2800, 9400, 11800];

// Ask the user for their name
let userName = prompt("Enter your name:");

// Handle Cancel or empty input
if (userName === null || userName.trim() === "") {
  userName = "Guest";
}

// Show greeting
alert(`Hello, ${userName}! Welcome to the revenue analysis.`);

// Find the maximum daily revenue
function findMax(revenues) {
  let maxRevenue = revenues[0];

  for (let revenue of revenues) {
    if (revenue > maxRevenue) {
      maxRevenue = revenue;
    }
  }

  return maxRevenue;
}

// Filter days with revenue above 10,000 rubles
function filterHighRevenue(revenues) {
  return revenues.filter(function (revenue) {
    return revenue > 10000;
  });
}

// Calculate total revenue
function calculateSum(revenues) {
  let total = 0;

  for (let revenue of revenues) {
    total += revenue;
  }

  return total;
}

// Count low-revenue days and calculate their share
function countLowRevenue(revenues) {
  let count = 0;

  for (let revenue of revenues) {
    if (revenue <= 3000) {
      count++;
    }
  }

  const share = (count / revenues.length) * 100;

  return {
    count: count,
    share: share,
  };
}

// Main calculations
const maxRevenue = findMax(dailyRevenue);
const highRevenueDays = filterHighRevenue(dailyRevenue);
const totalRevenue = calculateSum(dailyRevenue);
const lowRevenueInfo = countLowRevenue(dailyRevenue);
const averageRevenue = totalRevenue / dailyRevenue.length;

// Show main result
alert(
  `Total revenue: ${totalRevenue} ₽.\n` +
    `High-revenue days: ${highRevenueDays.length}.`,
);

// Output detailed information to console
console.log("Daily revenue:", dailyRevenue);
console.log("Maximum revenue:", maxRevenue + " ₽");
console.log("High revenue days:", highRevenueDays);
console.log("Total revenue:", totalRevenue + " ₽");
console.log("Average revenue:", averageRevenue.toFixed(2) + " ₽");
console.log("Low revenue days:", lowRevenueInfo.count);
console.log("Low revenue percentage:", lowRevenueInfo.share.toFixed(2) + "%");

// Additional condition
if (averageRevenue < 5000) {
  console.log("It is worth analyzing the reasons for low revenue.");
}
