// ----------------- Animated Loader Script -----------------
const loader = document.querySelector('.loader-container');
const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('.progress-text');
const progressDetails = document.querySelector('.progress-details');
const progressComplete = document.querySelector('.progress-complete');

// Steps description shown below percentage
const details = [
  'Loading assets…',
  'Processing data…',
  'Initializing components…',
  'Finalizing setup…',
  'Almost there…'
];

let progress = 0;

function randomSpeed() {
  return 0.5 + Math.random() * 1.6; // 0.5 – 2.1
}

function updateDetails() {
  if (progress < 20)      progressDetails.textContent = details[0];
  else if (progress < 45) progressDetails.textContent = details[1];
  else if (progress < 70) progressDetails.textContent = details[2];
  else if (progress < 90) progressDetails.textContent = details[3];
  else                    progressDetails.textContent = details[4];
}

function animate() {
  progress += randomSpeed();
  if (progress > 100) progress = 100;

  progressBar.style.width = `${progress}%`;
  progressText.textContent = `${Math.floor(progress)}%`;
  loader.setAttribute('aria-valuenow', Math.floor(progress));
  updateDetails();

  if (progress < 105) {
    setTimeout(() => requestAnimationFrame(animate), 20 + Math.random() * 30);
  } else {
    loader.classList.add('complete');
  }
}

// Kick-off after small delay for dramatic effect
setTimeout(() => {
  animate();
  loader.style.transform = 'scale(1)';
  loader.style.opacity = '1';
}, 400);
