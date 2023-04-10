const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))
function startTime(){
  let today = new Date()
  let h = today.getHours()
  let m = today.getMinutes()
  let s = today.getSeconds()
  h = checkTime(h)
  m = checkTime(m)
  s = checkTime(s)
  document.getElementById('timer').innerHTML = h + ":" + m + ":" + s
  setTimeout(startTime , 1)
}

function checkTime(i){
  if(i < 10) {i = "0" + i}
  return i
}
const clear = document.querySelector(`.icon`)
let head = document.querySelector(`.h1`)

window.onload = () => {
  let input = document.querySelector(`input`.toUpperCase())
  input.oninput = function(){
      let value = this.value.trim()

      let list = document.querySelectorAll(`.main .patt`)

      if(value !== "") {
        clear.onclick = function(){
          document.getElementById(`mySearch`).value = ``
        }
         list.forEach(elem => {
              if(elem.innerText.search(value) == -1){
                  elem.classList.add(`hide`)
              }
          })
      }else{
        clear.onclick = function(){
          document.getElementById(`mySearch`).value = ``
        }
          list.forEach(elem =>{
              elem.classList.remove(`hide`)
          })
      }
  }
}

clear.onclick = function(){
  document.getElementById(`mySearch`).value = ``
}

