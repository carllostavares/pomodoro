const milisegundosPomodoro = 4000 //25*60*1000
const disparador = document.querySelector('#disparador')
let milisegundoRestante = milisegundosPomodoro - 1000;
let contador;

disparador.addEventListener('click',() => {
  console.log('Disparador ativado !')

  console.log('faltam', (milisegundosPomodoro/1000));

  contador = setInterval('contandoSegundos()',1000);

})

function contandoSegundos(){

  if(milisegundoRestante == 0) {
    console.log("Acabou pomodoro !!");
    alert("Seu tempo de produção acabou. Vá descansare !");

    clearInterval(contador);
  }else{
    console.log('faltam',(milisegundoRestante/1000));
  }
  milisegundoRestante -= 1000;
}