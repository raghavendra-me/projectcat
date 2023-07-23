const cpButton = document.querySelector('.cpButton');
let state = 'OFF';
const img1 = document.querySelectorAll('.img1');
const img2 = document.querySelectorAll('.img2');

cpButton.addEventListener('click', () => {
    if (state === 'OFF') {
        state = 'ON';
        cpButton.textContent = state;
        
        img1.forEach(img => {
            img.src = './assets/on-buln.png';
        });
        img2.forEach(img => {
            img.src = './assets/on-cat.png';
        });

        // Play sound
        const sound = new Audio('./assets/catsnd.mp3');
        sound.play();
    }
    else {
        state = 'OFF';
        cpButton.textContent = state;
        img1.forEach(img => {
            img.src = './assets/off-bulb.png';
        });
        img2.forEach(img => {
            img.src = './assets/off-cat.png';
        });
    }
    
});

