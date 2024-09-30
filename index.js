const repeat = document.getElementById('repeat')
const repetir = document.querySelector('section img')

repeat.addEventListener('click', () => {
    repetir.style.animation = "";
    setTimeout(() => repetir.style.animation = "anime 3s linear", 5);
});



































/*repeat.addEventListener("click", ()=> {
    repetir.style.animation = "";
    setTimeout(() => repetir.style.animation = " anime 3s linear", 5);
  });*/