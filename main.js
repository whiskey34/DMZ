const steps = document.querySelectorAll('.step-1, .step-2, .step-3');
const prevButton = document.querySelector('.left-arrow');
const nextButton = document.querySelector('.right-arrow');

let currentStep = 0;

function updateStep() {
  steps.forEach((step, index) => {
    if (index === currentStep) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
}

function navigateNext() {
  currentStep = (currentStep + 1) % steps.length;
  updateStep();
}

function navigatePrevious() {
  currentStep = (currentStep - 1 + steps.length) % steps.length;
  updateStep();
}

nextButton.addEventListener('click', navigateNext);
prevButton.addEventListener('click', navigatePrevious);
