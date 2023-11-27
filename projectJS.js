// Thomas Coates
// 11/26/2023
// Final Project Js

document.addEventListener('DOMContentLoaded', function() {
    const mealPlanForm = document.getElementById('mealPlanForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const goalInput = document.getElementById('goalInput');
    const clearButton = document.getElementById('clearButton');
  
    mealPlanForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const goal = goalInput.value.trim();
  
      if (isValidEmail(email)) {
        document.getElementById('name').textContent = name;
        document.getElementById('email').textContent = email;
        document.getElementById('goal').textContent = goal;
  
        generateMealPlan();
      } else {
        alert('Please enter a valid email address.');
      }
    });
  
    clearButton.addEventListener('click', function() {
      mealPlanForm.reset();
      clearMealPlan();
    });
  
    function generateMealPlan() {
      const breakfast = document.getElementById('breakfastInput').value.trim();
      const snack1 = document.getElementById('snack1Input').value.trim();
      const lunch = document.getElementById('lunchInput').value.trim();
      const snack2 = document.getElementById('snack2Input').value.trim();
      const dinner = document.getElementById('dinnerInput').value.trim();
  
      const mealPlanWindow = window.open('', '_blank');
      mealPlanWindow.document.write('<html><head><title>Your Meal Plan</title>');
      mealPlanWindow.document.write('<style>');
      mealPlanWindow.document.write('/* Styles for the meal plan table */');
      mealPlanWindow.document.write('</style></head><body>');
      mealPlanWindow.document.write('<h1>Your Meal Plan</h1>');
      mealPlanWindow.document.write('<div class="personal-info">');
      mealPlanWindow.document.write('<h2>Personal Information</h2>');
      mealPlanWindow.document.write('<p><strong>Name:</strong> ' + nameInput.value.trim() + '</p>');
      mealPlanWindow.document.write('<p><strong>Email:</strong> ' + emailInput.value.trim() + '</p>');
      mealPlanWindow.document.write('<p><strong>Goal:</strong> ' + goalInput.value.trim() + '</p>');
      mealPlanWindow.document.write('</div>');
      mealPlanWindow.document.write('<h2>Meal Plan</h2>');
      mealPlanWindow.document.write('<table>');
      mealPlanWindow.document.write('<tr><th>Meal</th><th>Menu</th></tr>');
      mealPlanWindow.document.write('</table>');
      mealPlanWindow.document.write('</body></html>');
      mealPlanWindow.document.close();
    }
  
    function clearMealPlan() {
      document.getElementById('name').textContent = '';
      document.getElementById('email').textContent = '';
      document.getElementById('goal').textContent = '';
    }
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });