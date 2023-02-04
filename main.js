const segundosPomodoro = 4000 //25*60*1000
const disparador = document.querySelector('#disparador')

disparador.addEventListener('click',() => {
  console.log('ativado !')
  setTimeout(() => {
    console.log("JÁ CONTOU !!!");
    alert("Seu tempo de produção acabou. Vá descansare !")
  }, segundosPomodoro) 
})
