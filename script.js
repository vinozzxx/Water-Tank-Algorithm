const svg = document.getElementById("svgCanvas");
const result = document.getElementById("result");
const SCALE = 30; // Height scaling factor
const BAR_WIDTH = 40; // Width of each block
const GAP = 10; // Gap between bars
const BASELINE = 280; // Bottom of SVG
// Left max calculation
function getLeftMax(arr) {
const leftMax = [];
let max = 0;
for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    leftMax.push(max);
}
return leftMax;
}
// Right max calculation
function getRightMax(arr) {
const rightMax = [];
let max = 0;
for (let i = arr.length - 1; i >= 0; i--) {
    max = Math.max(max, arr[i]);
    rightMax[i] = max;
}
return rightMax;
}
// Draw rectangle in SVG
function drawRect(x, y, width, height, color) {
const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rect.setAttribute("x", x);
rect.setAttribute("y", y);
rect.setAttribute("width", width);
rect.setAttribute("height", height);
rect.setAttribute("fill", color);
svg.appendChild(rect);
}
// Main calculation + SVG rendering
function calculateAndDraw(arr) {
svg.innerHTML = "";
result.textContent = "0";
const leftMax = getLeftMax(arr);
const rightMax = getRightMax(arr);

let totalWater = 0;

for (let i = 0; i < arr.length; i++) {
    const x = i * (BAR_WIDTH + GAP);

    const blockHeight = arr[i] * SCALE;
    const blockY = BASELINE - blockHeight;

    // Draw block
    drawRect(x, blockY, BAR_WIDTH, blockHeight, "#555");

    // Water calculation
    const waterUnits = Math.min(leftMax[i], rightMax[i]) - arr[i];

    if (waterUnits > 0) {
        const waterHeight = waterUnits * SCALE;
        const waterY = blockY - waterHeight;

        drawRect(x, waterY, BAR_WIDTH, waterHeight, "#4fc3f7");
        totalWater += waterUnits;
    }
}

result.textContent = totalWater;
}
// Handle user input
function handleCalculate() {
const input = document.getElementById("inputHeights").value;
const heights = input
    .split(",")
    .map(n => Number(n.trim()));

if (heights.some(isNaN) || heights.some(h => h < 0)) {
    alert("Please enter valid non-negative numbers");
    return;
}

calculateAndDraw(heights);
}
// Initial render
handleCalculate();