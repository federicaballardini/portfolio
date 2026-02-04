let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const timeline = document.getElementById('timeline');
// scrollIndicator element reference removed

// Hides navbar on vertical scroll down
window.addEventListener('scroll', () => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  navbar.style.top = (st > lastScrollTop) ? '-80px' : '0';
  lastScrollTop = st <= 0 ? 0 : st;
});

// --- NEW ILLUSTRATION LOGIC (Background of Box) ---

const events = document.querySelectorAll('.event');

events.forEach(ev => {
    const imageUrl = ev.dataset.illustration;
    
    // Rotation logic removed for a more elevated design.
    
    if (imageUrl) {
        // Set background image directly. 
        ev.style.backgroundImage = `url(${imageUrl})`;
    } else {
         // Ensure boxes without images still have the dark background (managed primarily by CSS #111815)
         // Fallback style here is unnecessary as CSS handles it, but good practice.
    }
});
