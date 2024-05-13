let vitorias = 0;
let derrotas = 0;

function calcular2(){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      let valor1 = 0;
      let valor2 = 0;
      
      readline.question('Por favor, insira o primeiro valor: ', valor => {
        valor1 = valor;
        readline.question('Por favor, insira o segundo valor: ', valor => {
          valor2 = valor;
            calcular3(valor1, valor2);
          readline.close();
        });
      });
}

function calcular3(valor1, valor2){
    let resultado = valor1 - valor2;
    if(resultado <= 10){
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Ferro");
    }else if(resultado <= 20){
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Bronze");
    }else if (resultado <= 50){
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Prata");
    }else if(resultado <= 80){
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Ouro");
    }else if(resultado <= 90){
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Diamante");
    }else if(resultado <= 100){
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Lendário");
    }else if(resultado > 100){
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Imortal");0
    }
} 

function calcular() {
    vitorias = document.getElementById("vitorias").value;
    derrotas = document.getElementById("derrotas").value;
    
    calcular4(vitorias, derrotas);
}

function calcular4(vitorias, derrotas){
    let result = vitorias - derrotas;
    let nivel = "";
    if(result <= 10){
        console.log("O Herói tem de saldo de " + result + " está no nível de Ferro");
        nivel = "Ferro";
    }else if(result <= 20){
        console.log("O Herói tem de saldo de " + result + " está no nível de Bronze");
        nivel = "Bronze";
    }else if (result <= 50){
        console.log("O Herói tem de saldo de " + result + " está no nível de Prata");
        nivel = "Prata";
    }else if(result <= 80){
        console.log("O Herói tem de saldo de " + result + " está no nível de Ouro");
        nivel = "Ouro";
    }else if(result <= 90){
        console.log("O Herói tem de saldo de " + result + " está no nível de Diamante");
        nivel = "Diamante";
    }else if(result <= 100){
        console.log("O Herói tem de saldo de " + result + " está no nível de Lendário");
        nivel = "Lendário";
    }else if(result > 100){
        console.log("O Herói tem de saldo de " + result + " está no nível de Imortal");
        nivel = "Imortal";
    }

    document.getElementById("result").innerHTML = "O Herói tem de saldo de " + result + " está no nível de " + nivel;

    let element = document.getElementById('resultado');
    element.classList.remove('hidden');
    element.classList.add('resultado');
}

calcular2();