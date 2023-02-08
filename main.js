const milisegundosPomodoro = 10000 //25*60*1000
const milissegundosIntervalo = 300000;
const disparador = document.querySelector('#disparador');
const cronometro = document.querySelector('#cronometro');
let milissegundosRestante = 0;
let contador

disparador.addEventListener('click',() => {
  console.log('Disparador ativado !')

  if(disparador.textContent=="Start"){
    milissegundosRestante = milisegundosPomodoro - 1000
  }else{
    milissegundosRestante = milissegundosIntervalo - 1000
  }
  
  contador = setInterval('contadorDeSegundos()',1000);
})

function contadorDeSegundos() {

  if(milissegundosRestante == 0) {
    cronometro.textContent = "00:00";
    console.log("Seu tempo de produção acabou. Vá descansare !");

    if(disparador.textContent=="Start"){
      disparador.textContent = "Intervalo"
      document.querySelector('body').style.background = "#287b7e";
      disparador.style.color = "#287b7e"

    }else{
      disparador.textContent="Start"
      document.querySelector('body').style.background = "#c84949";
      disparador.style.color = "#c84949"
    }

    clearInterval(contador)
  } else {
    cronometro.textContent = formatadorDoTempo(milissegundosRestante/1000)
  }

  milissegundosRestante -= 1000;
}

function formatadorDoTempo(tempo) {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;

  return (minutos.toString().padStart(2,'0')+":"+segundos.toString().padStart(2,'0'))
}