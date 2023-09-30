const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lampada_desligada = document.getElementById('lampada_desligada');


function lampOn(){
    if (!islampBroken()){  
    lampada_desligada.src = './imagem/ligada.jpg'
    }
}

function lampOff(){
    if (!islampBroken()){
    lampada_desligada.src = './imagem/desligada.jpg'
    }
}

function lampBroken(){
    lampada_desligada.src = './imagem/quebrada.jpg'
}

function islampBroken(){
    return lampada_desligada.src.indexOf('quebrada') > -1
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);

lampada_desligada.addEventListener('mouseover', lampOn);
lampada_desligada.addEventListener('mouseleave', lampOff);

lampada_desligada.addEventListener('dblclick', lampBroken);