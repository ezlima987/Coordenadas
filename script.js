function verificar() {
    let x = Number(document.getElementById("x").value);
    let y = Number(document.getElementById("y").value);
  
    let resultado = document.getElementById("resultado");
  
    if (x === 0 && y === 0) {
      resultado.textContent = "Origem";
    } 
    else if (y === 0) {
      resultado.textContent = "Eixo X";
    } 
    else if (x === 0) {
      resultado.textContent = "Eixo Y";
    } 
    else if (x > 0 && y > 0) {
      resultado.textContent = "Q1";
    } 
    else if (x < 0 && y > 0) {
      resultado.textContent = "Q2";
    } 
    else if (x < 0 && y < 0) {
      resultado.textContent = "Q3";
    } 
    else if (x > 0 && y < 0) {
      resultado.textContent = "Q4";
    }
  }