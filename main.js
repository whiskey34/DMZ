const steps = document.querySelectorAll('.row .col');
let activeStep = 0;

updateActiveStep();

const prevButton = document.querySelector('.left-arrow');
const nextButton = document.querySelector('.right-arrow');

prevButton.addEventListener('click', goToPreviousStep);
nextButton.addEventListener('click', goToNextStep);

function goToPreviousStep() {
  if (activeStep > 0) {
    activeStep--;
    updateActiveStep();
  }
}

function goToNextStep() {
  if (activeStep < steps.length - 1) {
    activeStep++;
    updateActiveStep();
  }
}

function updateActiveStep() {
  steps.forEach((step) => {
    step.classList.remove('active-step');
    step.classList.remove('hover-step');
  });

  steps[activeStep].classList.add('active-step');

  // Add hover effect to the active step
  steps[activeStep].addEventListener('mouseover', addHoverClass);
  steps[activeStep].addEventListener('mouseout', removeHoverClass);
}

function addHoverClass() {
  if (!this.classList.contains('hover-step')) {
    this.classList.add('hover-step');
  }
}

function removeHoverClass() {
  this.classList.remove('hover-step');
}