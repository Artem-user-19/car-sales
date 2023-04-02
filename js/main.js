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

