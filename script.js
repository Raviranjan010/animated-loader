const messages = [
    "Optimizing Core...",
    "Syncing Data...",
    "Injecting Styles...",
    "Finalizing UI...",
    "Almost there..."
];

function startLoader() {
    const bar = document.getElementById('progressBar');
    const text = document.getElementById('percentText');
    const status = document.getElementById('statusMsg');
    const wrapper = document.getElementById('loaderWrapper');
    
    let progress = 0;

    const interval = setInterval(() => {
        // Increment progress by random amounts for a "natural" feel
        progress += Math.floor(Math.random() * 5) + 1;

        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            completeAnimation(wrapper);
        }

        // Update UI
        bar.style.width = progress + "%";
        text.innerText = progress + "%";
        
        // Change messages based on progress
        if (progress < 30) status.innerText = messages[0];
        else if (progress < 60) status.innerText = messages[1];
        else if (progress < 85) status.innerText = messages[2];
        else status.innerText = messages[4];

    }, 150);
}

function completeAnimation(wrapper) {
    setTimeout(() => {
        wrapper.classList.add('finished');
    }, 500);
}

// Start on load
document.addEventListener('DOMContentLoaded', startLoader);
