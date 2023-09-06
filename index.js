const numA = parseInt(prompt("ingrese un numero: "));
const numB = parseInt(prompt("ingrese un numero: "));
const operation = prompt("ingrese una operacion (+, -, *, /,):");

function calculator (a, b, operation) { 
    switch (operation) { 
        case "+":
          console.log(a + b) ; 
         break; 
          
        case "-":
            console.log(a - b) ; 
           break;
          
        case "*":
          console.log(a * b) ; 
         break; 
          
        case "/":
          console.log(a / b) ; 
         break; 
         default:
            console.log (0);
            break
          } 
    }
calculator(numA, numB, operation);
             
          