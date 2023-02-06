const milisegundosPomodoro = 70000 //25*60*1000
const disparador = document.querySelector('#disparador');
const cronometro = document.querySelector('#cronometro');
let milissegundosRestante = milisegundosPomodoro - 1000
let contador

disparador.addEventListener('click',() => {
  console.log('Disparador ativado !')

  console.log('faltam', (milisegundosPomodoro/1000))

  contador = setInterval('contadorDeSegundos()',1000);

})

function contadorDeSegundos() {

  if(milissegundosRestante == 0) {
    cronometro.textContent = "00:00";
    console.log("Seu tempo de produção acabou. Vá descansare !");

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