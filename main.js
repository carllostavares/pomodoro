const milisegundosPomodoro = 4000 //25*60*1000
const milissegundosIntervaloCurto = 4000;
const milissegundosIntervaloLongo =9000;
const disparador = document.querySelector('#disparador');
const cronometro = document.querySelector('#cronometro');
const historico = document.querySelector('#historico');
const tamanhoDoCiclo = 4;  
let  milissegundosRestante = 0;
let contador
let modo = ''

const audioInicio = new Audio("./audio/inicio.m4a")

disparador.addEventListener('click',() => {
  console.log('Disparador ativado !')

    if(disparador.textContent=="Pausar"){
      clearInterval(contador)
      disparador.textContent="Retomar"
    }else{
      if(disparador.textContent=="Start"){
        modo = "pomodoro"
        audioInicio.play()

        milissegundosRestante = milisegundosPomodoro - 1000
        historico.textContent = parseInt(historico.textContent) +1
      }else if(disparador.textContent=="intervalo"){
        modo = "intervalo"
        if(historico.textContent % tamanhoDoCiclo == 0){
          milissegundosRestante = milissegundosIntervaloLongo;
        }else{
          milissegundosRestante = milissegundosIntervaloCurto;
        }
        milissegundosRestante -= 1000
      }
      
      disparador.textContent="Pausar"
      contador = setInterval('contadorDeSegundos()',1000);
  }

})

function contadorDeSegundos() {

  if(milissegundosRestante == 0) {
    cronometro.textContent = "00:00";
    console.log("Seu tempo de produção acabou. Vá descansare !");

    if(modo == "pomodoro"){
      disparador.textContent = "intervalo"
      if(historico.textContent % tamanhoDoCiclo == 0){
        document.querySelector('body').style.background = "#29678A";
        disparador.style.color = "#29678A"
      }else{
        document.querySelector('body').style.background = "#287b7e";
        disparador.style.color = "#287b7e"  
      }
   
    }else if(modo == "intervalo"){
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