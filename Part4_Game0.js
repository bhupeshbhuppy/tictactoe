// Restart Game Button
var cell = document.getElementsByTagName("td")
function clickme (){
  if(this.innerHTML == "X"){
    this.innerHTML = "O"
  }
  else if (this.innerHTML == "O") {
    this.innerHTML = ""
  }
  else {
    this.innerHTML = "X"
  }
}
function restart(){
  for(i= 0 ; i< cell.length ; i++ ){
      cell[i].innerHTML = ""
  }
}
document.querySelector('a').addEventListener('click',restart)
for(i= 0 ; i< cell.length ; i++ ){
    cell[i].addEventListener('click',clickme)
}
