// LABA 5 - DOM ELEMENTS
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

// ADD IDEA
function createIdeaCard(name, audience, metric) {
  const article = document.createElement("article");
  article.classList.add("startup-card");

  const title = document.createElement("h3");
  title.textContent = name;

  const audienceParagraph = document.createElement("p");
  audienceParagraph.innerHTML = `<strong>Target Audience:</strong> ${audience}`;

  const metricParagraph = document.createElement("p");
  metricParagraph.innerHTML = `<strong>Metric:</strong> ${metric}`;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.classList.add("delete-idea-btn");
  deleteButton.textContent = "Delete";

  article.appendChild(title);
  article.appendChild(audienceParagraph);
  article.appendChild(metricParagraph);
  article.appendChild(deleteButton);

  return article;
}

function addIdea() {
  if (!ideasContainer) {
    console.error("Cannot add idea: ideas container not found.");
    return;
  }

  const ideaName = prompt("Enter startup idea name:");

  if (ideaName === null || ideaName.trim() === "") {
    return;
  }

  const targetAudience = prompt("Enter target audience:");

  if (targetAudience === null || targetAudience.trim() === "") {
    return;
  }

  const metric = prompt("Enter startup metric:");

  if (metric === null || metric.trim() === "") {
    return;
  }

  const newIdeaCard = createIdeaCard(
    ideaName.trim(),
    targetAudience.trim(),
    metric.trim(),
  );

  ideasContainer.appendChild(newIdeaCard);
}

if (addIdeaButton) {
  addIdeaButton.addEventListener("click", addIdea);
}

// DELETE IDEAS
// Delete a specific idea card
if (ideasContainer) {
  ideasContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-idea-btn")) {
      const ideaCard = event.target.closest(".startup-card");

      if (ideaCard) {
        ideaCard.remove();
      }
    }
  });
}

// Delete the last idea card
function deleteLastIdea() {
  if (!ideasContainer) {
    console.error("Cannot delete idea: ideas container not found.");
    return;
  }

  const cards = ideasContainer.querySelectorAll(".startup-card");

  if (cards.length === 0) {
    console.log("No startup ideas to delete.");
    alert("The startup ideas list is empty.");
    return;
  }

  const lastCard = cards[cards.length - 1];
  lastCard.remove();
}

if (deleteLastButton) {
  deleteLastButton.addEventListener("click", deleteLastIdea);
}

// End of the labwork 5

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
