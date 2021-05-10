//Váriavel global
const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  //validação se os campos estão preenchidos
  if (nome == "" && altura == "" && peso == "") {
    resultado.textContent = "Informações insuficientes";
  } else {
    const valorIMC = (peso / (altura * altura)).toFixed(1);
    resultado.textContent = valorIMC;

    let classificacaoIMC ='';
    if(valorIMC<18.5){
        classificacaoIMC ='você está abaixo do peso.';
    }else if(valorIMC<25){
        classificacaoIMC ='você está com peso ideal. Parabéns!!!';
    }else if(valorIMC<30){
        classificacaoIMC ='você está levemente acima do peso';
    }else if(valorIMC<35){
        classificacaoIMC ='você está com obesidade grau 1';
    }else if(valorIMC<40){
        classificacaoIMC ='você está com obesidade grau 2';
    }else {
        classificacaoIMC = 'você está com obesidade grau 3. CUIDADO!!!';
    }
    resultado.textContent = `${nome} seu IMC é ${valorIMC} e ${classificacaoIMC}`; //Aqui na div resultado consigo execultar e mostrar minhas variaveis, por conta do template string.
  }
}

calcular.addEventListener("click", imc);
