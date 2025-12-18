# Water Tank Problem (Trapping Rain Water)

## Overview
This project solves the classic Trapping Rain Water problem and visualizes the result using a frontend-only web application built with Vanilla JavaScript, HTML, CSS, and SVG.

The application calculates how much water can be trapped between blocks of different heights and renders both the blocks and trapped water visually using SVG rectangles.

## Problem Statement
Given an array of non-negative integers representing block heights, calculate the total units of water that can be trapped between the blocks after rain.

Example  
Input: [0,4,0,0,0,6,0,6,4,0]  
Output: 18 Units

## Features
- Dynamic user input via text field
- Accurate water calculation using an optimized algorithm
- SVG-based visualization
- Clear visual distinction between blocks and trapped water
- Frontend-only solution with no frameworks or backend

## Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript
- SVG (Scalable Vector Graphics)

## Algorithm Used
The solution uses an O(n) time complexity approach:
1. Compute the maximum height to the left of each block
2. Compute the maximum height to the right of each block
3. Water trapped at each index is calculated as:
   min(leftMax[i], rightMax[i]) - height[i]
4. Sum all positive values to get the total trapped water

## Visualization Approach
- Each block is rendered as a grey SVG rectangle
- Trapped water is rendered as a blue SVG rectangle above the block
- Heights are scaled for better visibility
- SVG provides precise control and scalable visuals

## Project Structure
water-tank-problem/
├── index.html
├── style.css
└── script.js

## How to Run the Project

Using Command Prompt:
1. Open Command Prompt
2. Navigate to the project folder:
   cd path\to\water-tank-problem
3. Start a local server:
   start index.html

## How to Use
1. Enter block heights as comma-separated values (example: 3,0,2,0,4)
2. Click the Calculate button
3. View the SVG visualization and total trapped water units

## Output
The application displays:
- SVG visualization of blocks and trapped water
- Total trapped water in units

## Author
Sai Sudharsan S G
