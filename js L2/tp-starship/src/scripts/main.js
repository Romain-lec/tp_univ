
// importation de l'instance de Game créée dans Game.js
import theGame from './game.js';


// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le starship
const init = () => {
    theGame.moveAndDraw();
    const saucer_btn = document.getElementById('nouvelleSoucoupe');
    const saucer_wave_btn = document.getElementById("flotteSoucoupes");
    saucer_btn.addEventListener('click',() => theGame.addSaucer());
    saucer_wave_btn.addEventListener('click',() => {
        
        if(waveStatus == 0){
            wave= window.setInterval(theGame.addSaucer.bind(theGame),theGame.interval_wave);
            waveStatus = 1;
        }else{
            clearInterval(wave);
            waveStatus = 0;
        }
    });
    window.addEventListener('keydown',theGame.keyDownAction.bind(theGame));
    window.addEventListener('keyup',theGame.keyUpAction.bind(theGame));
}

let waveStatus = 0;
let wave;

window.addEventListener("load",init);

//
console.log('le bundle a été généré');
