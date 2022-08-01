//variáveis

var preco = 2;
var desconto = 0.2;

const PRECO = 2;
var total = PRECO - desconto;


//funçoes

function soma(a, b) {
	//console.log(a+b);
	return a+b;
}

soma(5, 6);


//console

//console.log("Hello Word!");

function returnEvenValues(array) {
	let evenNums = [];
		for (let i = 0; i < array.length; i++) {
			if (array[i] % 2 === 0) {
					evenNums.push(array[i]);
			} else {
				console.log(array[i],"não é par!");
			}	
		}
		console.log('Os números pares são: ',evenNums);
	}
	let array = [1, 2, 3, 4, 5, 7, 8];
	returnEvenValues(array);


// Estrutura do projeto


function soma(a, b) {
    return a + b;
}
