function Calculation()
{
    operation = document.getElementById("opr").value;
    num1 = parseFloat(document.getElementById("First-Number").value);
    num2 = parseFloat(document.getElementById("Second-Number").value);

   let result;

   if (isNaN(num1) || isNaN(num2)) {
       result = "Please enter valid numbers.";
   } else {
       switch (operation) {
           case "+":
               result = num1 + num2;
               break;
           case "-":
               result = num1 - num2;
               break;
           case "*":
               result = num1 * num2;
               break;
           case "/":
            result = num1 / num2;
             
           default:
               result = "Invalid oper..";
       }
   }

   document.getElementById("result").textContent =` ${num1} ${operation} ${num2} = ${result}`;
   console.log(` ${num1} ${operation} ${num2} = ${result}`);
}