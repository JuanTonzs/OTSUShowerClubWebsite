document.addEventListener('mousemove', function(e) {
    const showerContainer = document.getElementById('shower-container');
    const showerhead = document.getElementById('showerhead');
    const water = document.getElementById('water');
    
    // Calculate the position of the mouse relative to the showerhead
    let x = e.clientX - (showerhead.offsetWidth / 2);
    
    // Move the showerhead and water to follow the mouse
    showerContainer.style.left = x + 'px';
});

// Add multiple water streams dynamically
const waterContainer = document.getElementById('water');
for (let i = 0; i < 10; i++) { // Adjust the number of streams
    const stream = document.createElement('div');
    stream.className = 'water-stream';
    waterContainer.appendChild(stream);
}

document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    const bubbleCount = 100; // Number of bubbles

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Randomize bubble size
        const size = Math.random() * 20 + 10 + 'px'; // Smaller size range
        bubble.style.width = size;
        bubble.style.height = size;

        // Randomize bubble position
        let leftPosition = Math.random() * 100 + '%';
        bubble.style.left = leftPosition;

        // Adjust animation for smoother transitions
        bubble.style.animationDuration = Math.random() * 5 + 10 + 's';
        bubble.style.animationDelay = Math.random() * 10 + 's';

        // Add click event listener to make bubbles pop
        bubble.addEventListener('click', () => {
            bubble.classList.add('pop');
            // Remove the bubble from DOM after the animation
            bubble.addEventListener('animationend', () => {
                bubble.remove();
            });
        });

        heroSection.appendChild(bubble);
    }
});


// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}