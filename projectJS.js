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
  
      const email = emailInput.value.trim();
  
      if (!isEmailValid(email)) {
        alert('Please enter a valid email address.');
      } 
      else {
        generateMealPlan();
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
      var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
      const mealPlanWindow = window.open('', '_blank');
      mealPlanWindow.document.write('<html><head><title>Your Meal Plan</title>');   
      mealPlanWindow.document.write('</head><body>');
      mealPlanWindow.document.write("<h1>Your Meal Plan</h1>");
      mealPlanWindow.document.write('<div class="personal-info">');
      mealPlanWindow.document.write('<h2>Personal Information</h2>');
      mealPlanWindow.document.write('<p><strong>Name:</strong> ' + nameInput.value.trim() + '</p>');
      mealPlanWindow.document.write('<p><strong>Email:</strong> ' + emailInput.value.trim() + '</p>');
      mealPlanWindow.document.write('<p><strong>Goal:</strong> ' + goalInput.value.trim() + '</p>');
      mealPlanWindow.document.write('</div>');
      mealPlanWindow.document.write('<h2>Meal Plan</h2>');
      mealPlanWindow.document.write('<table>');
      mealPlanWindow.document.write("<ul>");
      for (var i = 0; i < daysOfTheWeek.length; i++){
        mealPlanWindow.document.write("<li style = 'color:blue'>" + daysOfTheWeek[i] + "-- Breakfast: ", breakfast, ", Snack 1: ", snack1, ", Lunch: ", lunch, ", Snack 2: ", snack2, ", Dinner: ", dinner,  "</li>");
      }
      mealPlanWindow.document.write("</ul>");
      mealPlanWindow.document.write('</table>');
      mealPlanWindow.document.write("<button onclick='printCurrentPage()'>Print Meal Plan</button>")
      mealPlanWindow.document.write("<button onclick='downloadCurrentPage()'>Download Meal Plan</button>")
      mealPlanWindow.document.write('</body></html>');
      mealPlanWindow.document.close();
    }

    function downloadCurrentPage() {
        const content = mealPlanWindow.document;

        const options = {
        margin: 10,
        filename: 'document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf(content, options);
  
    }

    function printCurrentPage(){
        mealPlanWindow.print();
    }
  
    function clearMealPlan() {
      document.getElementById('name').textContent = '';
      document.getElementById('email').textContent = '';
      document.getElementById('goal').textContent = '';
    }
  
    function isEmailValid(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });