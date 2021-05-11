let colorSquare=document.getElementById("squareDiv")
let colorName=document.getElementById("colorName")

function changeColor(){
  let inputValue = colorName.value; 
  inputValue = inputValue.replace(/\s/g, "");
  colorSquare.style.backgroundColor=inputValue;
}

function  HandleKeyDown(event){
  if(event.keyCode===13){
    changeColor()
  }
  
}

colorName.addEventListener("keydown", HandleKeyDown)