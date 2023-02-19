
// const btn = document.getElementById("btn1")
// btn.addEventListener("click",()=>{
//   console.log("hello")
// })
// Get the modal
var modal = document.getElementById("pricing-modal");

// Get the button that opens the modal
var btn = document.getElementById("pricing-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Get the slider input and plans
var sliderInput = document.querySelector('.slider-input');
var sliderPlans = document.querySelectorAll('.slider-plan');

// Update the active plan based on the slider input value
function updateActivePlan() {
  var sliderValue = parseInt(sliderInput.value);
  var activePlan = Math.floor(sliderValue / 10);
  sliderPlans.forEach(function(plan, index) {
    var highlight = plan.querySelector('.slider-plan-highlight');
    if (index === activePlan) {
      highlight.classList.add('active');
    } else {
      highlight.classList.remove('active');
    }
  });
}

// Update the active plan when the slider input value changes
sliderInput.addEventListener('input', function() {
  updateActivePlan();
});

// Initialize the active plan
updateActivePlan();
