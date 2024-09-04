const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let audioName = `${button.className}.wav`;
        let audio = new Audio(audioName);
        audio.play();
    });
});

const keybuttons = document.querySelectorAll('h2');
document.addEventListener('keydown', (event1) => {
    keybuttons.forEach((keybutton) => {
        if(event1.key == keybutton.innerText){
            let audioName = `${keybutton.className}.wav`;
            let audio = new Audio(audioName);
            audio.play();
            const parent = keybutton.parentNode;
            parent.classList.add('playing');
        }
    });
});

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

buttons.forEach((button) => {
    button.addEventListener('transitionend', removeTransition);
});